import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../utils/firebase.client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Si Firebase no inicializado, proveemos contexto vacío
  if (!app) {
    console.warn("AuthProvider: Firebase no inicializado, se omite autenticación.");
    return (
      <AuthContext.Provider value={{ user: null, loading: false, logout: async () => {}, refreshUser: async () => {} }}>
        {children}
      </AuthContext.Provider>
    );
  }

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const auth = getAuth(app);
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const idTokenResult = await firebaseUser.getIdTokenResult(true); // forceRefresh = true
          setUser({ ...firebaseUser, isAdmin: idTokenResult.claims.admin || false });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (err) {
      console.error('Firebase auth init error:', err);
      setLoading(false);
      return;  // Sincrónicamente devolvemos para limpiar efecto
    }
  }, []);

  const refreshUser = async () => {
    const auth = getAuth(app);
    if (auth.currentUser && auth.currentUser.reload) {
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
    }
  };

  const logout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
