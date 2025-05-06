import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut, getIdToken } from "firebase/auth"; 
// Actualizar la ruta de importación para usar el alias y la nueva ubicación
import { app } from "@/lib/firebase/client.js"; 
// Import Firestore functions
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Create the context
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
  // Handle case where Firebase might not be initialized (e.g., during SSR or build)
  if (!app) {
    console.warn("AuthProvider: Firebase app not initialized, providing default empty context.");
    // Provide a default context value matching the structure when Firebase is active
    return (
      <AuthContext.Provider value={{ user: null, loading: false, logout: async () => {}, refreshUser: async () => {} }}>
        {children}
      </AuthContext.Provider>
    );
  }

  // State for the user object (will include auth data + Firestore data) and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start as loading

  // Effect to subscribe to Firebase Auth state changes
  useEffect(() => {
    let unsubscribeAuth = () => {}; // Initialize unsubscribe function

    try {
      const auth = getAuth(app);
      const db = getFirestore(app); // Get Firestore instance

      // Subscribe to authentication state changes
      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        setLoading(true);
        // console.log('[AuthProvider] onAuthStateChanged triggered. firebaseUser:', firebaseUser);
        if (firebaseUser) {
          try {
            // console.log('[AuthProvider] Antes de getIdToken');
            const idToken = await getIdToken(firebaseUser);
            // console.log('[AuthProvider] getIdToken OK, idToken:', idToken);

            // console.log('[AuthProvider] Antes de fetch /api/auth/session');
            const response = await fetch('/api/auth/session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify({ idToken }) 
            });
            // console.log('[AuthProvider] fetch /api/auth/session OK, response:', response.status);

            if (!response.ok) {
              const errorText = await response.text();
              let errorData = { message: `API Error ${response.status}: ${errorText || 'Failed to create session'}` };
              try {
                errorData = JSON.parse(errorText);
              } catch (e) {}
              // console.error('API Error creating session:', response.status, errorData);
              setUser(null);
              setLoading(false);
              // console.log('[AuthProvider] API error, set user to null');
              return;
            }

            // console.log('[AuthProvider] Antes de getDoc Firestore');
            const userDocRef = doc(db, "users", firebaseUser.uid);
            const userDocSnap = await getDoc(userDocRef);
            // console.log('[AuthProvider] getDoc Firestore OK:', userDocSnap.exists());

            let userData = { ...firebaseUser };

            if (userDocSnap.exists()) {
              // console.log("User document found in Firestore:", userDocSnap.data());
              const firestoreData = userDocSnap.data();
              userData = {
                ...userData,
                ...firestoreData,
                isAdmin: firestoreData.isAdmin === true
              };
            } else {
              // console.log("No user document found in Firestore for UID:", firebaseUser.uid, "Creating one...");
              try {
                await setDoc(userDocRef, { 
                  email: firebaseUser.email, 
                  displayName: firebaseUser.displayName || '',
                  photoURL: firebaseUser.photoURL || '',
                  isAdmin: false
                });
                userData = { ...userData, isAdmin: false };
              } catch (createError) {
                // console.error("Error creating user document:", createError);
              }
            }
            // console.log('[AuthProvider] userData antes de setUser:', JSON.stringify(userData, null, 2));
            setUser({ ...userData });
            // console.log('[AuthProvider] Usuario autenticado y datos cargados:', { ...userData });
            setLoading(false);
            // console.log('[AuthProvider] Finished processing auth state change.');
          } catch (e) {
            setUser(null);
            setLoading(false);
            if (e && e.stack) {
              // console.error('[AuthProvider] Error en try/catch, set user to null', e, e.stack);
            } else {
              // console.error('[AuthProvider] Error en try/catch, set user to null', e);
            }
          }

        } else {
          setUser(null);
          setLoading(false);
          // console.log('[AuthProvider] Usuario NO autenticado, set user to null, loading to false');
        }
      });

    } catch (authError) {
      // console.error("Error initializing Firebase Auth listener:", authError);
      setUser(null); // Ensure user is null if setup fails
      setLoading(false); // Finish loading even if there's an error
    }

    // Cleanup function: Unsubscribe from the auth listener when the component unmounts
    return () => {
      if (unsubscribeAuth) {
        unsubscribeAuth();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to manually refresh user data (both Auth and Firestore)
  const refreshUser = async () => {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const currentUser = auth.currentUser;

    if (currentUser) {
      setLoading(true); // Indicate loading state
      try {
        // 1. Reload Firebase Auth user data
        await currentUser.reload();
        // Make a fresh copy after reload
        const reloadedFirebaseUser = { ...auth.currentUser };

        // --- Opcional: Refrescar cookie de sesión si es necesario --- 
        // Podrías añadir lógica aquí para obtener un nuevo ID Token y llamar a POST /api/auth/session
        // si quieres extender la sesión del servidor activamente. Por simplicidad, no lo hacemos ahora.

        // 2. Fetch Firestore data again
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        let combinedUserData = reloadedFirebaseUser; // Start with reloaded Auth data

        if (userDocSnap.exists()) {
          const firestoreData = userDocSnap.data();
          combinedUserData = { ...combinedUserData, ...firestoreData };
           if (combinedUserData.isAdmin === undefined) {
             combinedUserData.isAdmin = false;
           }
        } else {
          combinedUserData.isAdmin = false; // Default if Firestore doc missing
        }

        // Update state with freshly combined data
        setUser(combinedUserData);

      } catch (refreshError) {
        // console.error("Error refreshing user data:", refreshError);
        // Optional: Decide how to handle refresh errors. Maybe revert to previous state?
        // For now, we just log the error. The user state might be partially updated (Auth only).
      } finally {
        setLoading(false); // Finish loading regardless of outcome
      }
    } else {
      // console.log("refreshUser called but no user is currently signed in.");
    }
  };

  // Logout function
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      const authInstance = getAuth(app); // <-- Obtener la instancia de auth
      await firebaseSignOut(authInstance); // <-- Usar la instancia obtenida
      // La lógica de onAuthStateChanged se encargará de poner user a null
      // Limpiar sesión en el backend (opcional pero recomendado)
      await fetch('/api/auth/session', { method: 'DELETE' });
      // console.log("Logout successful");
    } catch (error) {
      // console.error("Error during logout process:", error);
      // Intentar asegurar que el usuario se desloguea localmente incluso si la API falla
      setUser(null);
      setLoading(false);
    }
    // setLoading(false) es manejado por onAuthStateChanged usualmente, pero podemos ponerlo aquí
    // al final del try/catch por seguridad si algo más falla.
    // Sin embargo, es mejor dejar que onAuthStateChanged sea la fuente de verdad.
  }, []);

  // Log para depuración de contexto
  // console.log('[AuthProvider] user:', user, 'loading:', loading);
  // Provide the context value to children
  // console.log('[AuthProvider] user:', user, 'loading:', loading);
  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to easily consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Devuelve valores seguros por defecto si no hay provider
    return {
      user: null,
      loading: true,
      logout: async () => {},
      refreshUser: async () => {}
    };
  }
  return context;
};
