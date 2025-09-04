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
    const result = await signInWithPopup(auth, provider);
    // Si hay un pending Facebook credential, vincúlalo
    if (window.__pendingFacebookCredential) {
      try {
        await result.user.linkWithCredential(window.__pendingFacebookCredential);
        setError("");
        delete window.__pendingFacebookCredential;
        onClose();
      } catch (linkErr) {
        setError("No se pudo vincular Facebook: " + linkErr.message);
      }
    } else {
      onClose();
    }
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
    if (err.code === "auth/account-exists-with-different-credential") {
      // Guardar el credential de Facebook
      const pendingCred = FacebookAuthProvider.credentialFromError(err);
      // Obtener email asociado
      const email = err.customData?.email;
      setError("Ya existe una cuenta con este correo electrónico, pero fue creada usando otro método de acceso.\n\nPara continuar, inicia sesión con ese método. Luego podrás vincular tu cuenta de Facebook automáticamente. Si necesitas ayuda, contáctanos.");
      // Intentar obtener el proveedor original
      if (email) {
        try {
          const methods = await auth.fetchSignInMethodsForEmail(email);
          // Si es Google
          if (methods.includes("google.com")) {
            setError("Este correo electrónico ya está registrado con Google.\n\nPor favor, haz clic en 'Google' para iniciar sesión. Una vez que hayas iniciado sesión, tu cuenta de Facebook se vinculará automáticamente y podrás usar ambos métodos para acceder.");
            // Esperar a que el usuario haga login con Google
            // Aquí podrías mostrar un botón especial o instrucción
            // Vinculación automática después del login con Google
            // Se implementa en handleGoogle
            window.__pendingFacebookCredential = pendingCred;
          } else if (methods.includes("password")) {
            setError("Este correo electrónico ya está registrado con email y contraseña.\n\nInicia sesión con tu email y contraseña. Luego, desde tu perfil, podrás vincular tu cuenta de Facebook en la sección de configuración de cuenta.");
          } else {
            setError("Este correo electrónico ya está registrado con otro método de acceso: " + methods.join(", ") + ".\n\nPor favor, inicia sesión con ese método y luego podrás vincular tu cuenta de Facebook desde la configuración de tu perfil.");
          }
        } catch(fetchErr) {
          setError("Error al obtener el método de acceso original: " + fetchErr.message);
        }
      }
    } else {
      setError(err.message);
    }
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
