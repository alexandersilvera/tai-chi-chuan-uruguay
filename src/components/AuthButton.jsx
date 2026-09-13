import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile, getAuth } from "firebase/auth";
import { app } from "@/lib/firebase/client.js";

const AuthModal = lazy(() => import('./AuthModal.jsx'));

export default function AuthButton() {
  const { user, loading, handleGoogleLogin, handleLogout, refreshUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=22c55e&color=fff&size=128";

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("La imagen no puede superar los 2MB.");
      return;
    }

    setUploading(true);
    try {
      const auth = getAuth(app);
      if (!auth.currentUser) {
        throw new Error("No hay un usuario autenticado para actualizar el perfil.");
      }

      const storage = getStorage(app);
      const avatarRef = ref(storage, `avatars/${user.uid}.jpg`);

      await uploadBytes(avatarRef, file);
      const url = await getDownloadURL(avatarRef);

      await updateProfile(auth.currentUser, { photoURL: url });

      if (refreshUser) {
        await refreshUser();
      }
    } catch (err) {
      console.error("Error al cambiar el avatar:", err);
      alert("Hubo un error al cambiar el avatar.");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="text-white text-sm animate-pulse">Cargando...</div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <label className="relative cursor-pointer">
          <img
            src={user.photoURL || defaultAvatar}
            alt="Avatar del usuario"
            className="w-10 h-10 rounded-full border-2 border-emerald-500 object-cover"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
            disabled={uploading}
          />
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          )}
        </label>

        {user.isAdmin && (
          <a href="/dashboard" className="ml-2 px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors">
            Dashboard
          </a>
        )}

        <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors">
        Iniciar Sesión / Registro
      </button>
      {showModal && (
        <Suspense fallback={<div className="text-white">Cargando modal...</div>}>
          <AuthModal open={showModal} onClose={() => setShowModal(false)} onGoogleLogin={handleGoogleLogin} />
        </Suspense>
      )}
    </>
  );
}
