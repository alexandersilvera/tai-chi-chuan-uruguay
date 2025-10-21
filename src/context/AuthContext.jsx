import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from "@/lib/firebase/client.js";

// Creamos el contexto
const AuthContext = createContext();

// Componente proveedor
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchExtendedUserData = async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      setLoading(false);
      return;
    }

    const db = getFirestore(app);
    const userDocRef = doc(db, "users", firebaseUser.uid);
    
    let extendedUser = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      isAdmin: false, // Default value
    };

    try {
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const firestoreData = userDocSnap.data();
        extendedUser.isAdmin = firestoreData.isAdmin === true;
      } else {
        // Si el usuario no existe en Firestore, lo creamos
        await setDoc(userDocRef, { 
          email: firebaseUser.email, 
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || '',
          isAdmin: false
        });
      }
    } catch (error) {
      console.error("Error de permisos de Firestore al obtener datos del usuario:", error);
      // La app continuará con el usuario logueado pero sin permisos de admin.
    }
    
    setUser(extendedUser);
    setLoading(false);
  };

  // El useEffect ahora es mucho más simple. Solo escucha el estado de auth.
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Crear cookie de sesión cuando el usuario se autentica
        try {
          const idToken = await firebaseUser.getIdToken();
          const response = await fetch('/api/auth/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
          });

          if (!response.ok) {
            console.error('Error creating session cookie:', await response.text());
          } else {
            console.log('Session cookie created successfully');
          }
        } catch (error) {
          console.error('Error creating session cookie:', error);
        }
      }
      
      // Continuar con el flujo normal de fetchExtendedUserData
      await fetchExtendedUserData(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const refreshUser = useCallback(async () => {
    const auth = getAuth(app);
    if (auth.currentUser) {
      await auth.currentUser.reload();
      await fetchExtendedUserData(auth.currentUser);
    }
  }, []);

  // Función para iniciar sesión con Google
  const handleGoogleLogin = useCallback(async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Login con Google exitoso:", result.user.email);
      // La cookie de sesión se creará automáticamente en el useEffect por onAuthStateChanged
    } catch (error) {
      console.error("Error durante el login con Google:", error);
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = useCallback(async () => {
    const auth = getAuth(app);
    try {
      await firebaseSignOut(auth);
      // Opcional: Limpiar la cookie de sesión del backend
      await fetch('/api/auth/session', { method: 'DELETE' });
    } catch (error) {
      console.error("Error durante el logout:", error);
    }
  }, []);

  // Pasamos los valores al proveedor de contexto
  const value = { user, loading, handleGoogleLogin, handleLogout, refreshUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para consumir el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Si el contexto es undefined, devolver un objeto con valores por defecto
    return { user: null, loading: true, handleGoogleLogin: () => {}, handleLogout: () => {}, refreshUser: () => {} };
  }
  return context;
};
