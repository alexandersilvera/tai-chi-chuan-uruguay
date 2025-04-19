import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../utils/firebase.client";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();

  if (!open) return null;

  const auth = getAuth(app);
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (tab === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebook = async () => {
    setError("");
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md p-8 relative animate-fade-in">
        <button className="absolute top-2 right-2 text-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white" onClick={onClose}>&times;</button>
        <div className="flex mb-6">
          <button className={`flex-1 py-2 text-lg font-semibold rounded-t-lg ${tab === "login" ? "bg-emerald-600 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"}`} onClick={() => setTab("login")}>Iniciar sesión</button>
          <button className={`flex-1 py-2 text-lg font-semibold rounded-t-lg ${tab === "register" ? "bg-emerald-600 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"}`} onClick={() => setTab("register")}>Registrarse</button>
        </div>
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <input type="email" className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors">{tab === "login" ? "Entrar" : "Registrarse"}</button>
        </form>
        <div className="my-6 flex items-center gap-2">
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">o continúa con</span>
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={handleGoogle} className="flex items-center justify-center gap-3 w-full py-2 rounded bg-white border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-semibold">
            <FcGoogle className="text-xl" /> Google
          </button>
          <button onClick={handleFacebook} className="flex items-center justify-center gap-3 w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
            <FaFacebook className="text-xl" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
