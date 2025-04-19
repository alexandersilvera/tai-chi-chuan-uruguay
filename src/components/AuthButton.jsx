import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../utils/firebase.client";
import { updateProfile, getAuth } from "firebase/auth";

export default function AuthButton() {
  const { user, logout, refreshUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [showSizeError, setShowSizeError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=22c55e&color=fff&size=128";

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setShowSizeError(true);
      // Limpia el input para evitar problemas al intentar subir el mismo archivo otra vez
      e.target.value = "";
      return;
    }
    try {
      setUploading(true);
      setError("");
      const storage = getStorage(app);
      const avatarRef = ref(storage, `avatars/${user.uid}.jpg`);
      await uploadBytes(avatarRef, file);
      let url = null;
      try {
        url = await getDownloadURL(avatarRef);
      } catch (err) {
        setError("No se pudo obtener la imagen subida");
        return;
      }
      const auth = getAuth(app);
      const authUser = auth.currentUser;
      try {
        await updateProfile(authUser, { photoURL: url });
      } catch (err) {
        setError("No se pudo actualizar el perfil");
        return;
      }
      if (typeof refreshUser === "function") {
        await refreshUser(); // Refresca el usuario en el contexto
      }
    } catch (err) {
      setError("Error inesperado al cambiar avatar");
    } finally {
      setUploading(false);
    }
  };

  // Captura errores JS globales para mostrar feedback si la app crashea
  if (typeof window !== "undefined") {
    window.onerror = (msg, src, line, col, error) => {
      setError("[GLOBAL JS ERROR] " + msg + (error?.message ? (" | " + error.message) : ""));
      return false;
    };
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Avatar */}
          <img
            src={user.photoURL || defaultAvatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-emerald-600 shadow-sm object-cover transition-transform cursor-pointer"
          />
          {/* Tooltip de advertencia (controlado por estado, posicionado debajo) */}
          <div
            className={`pointer-events-none transition-all duration-200 absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-yellow-100 border border-yellow-400 text-yellow-900 text-xs rounded px-3 py-2 shadow-lg z-[999] whitespace-nowrap flex items-center gap-1 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}
            /* Posicionamiento restaurado y ajustado */
          >
            <svg className="h-4 w-4 text-yellow-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
            </svg>
            <span><b>No selecciones imágenes mayores a 2MB.</b> Si tu navegador falla, prueba con otro navegador o reduce el tamaño antes de subir.</span>
          </div>
          {/* --- DESCOMENTADO --- */}
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full z-10">
              <svg className="animate-spin h-6 w-6 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          )}
          {/* Botón de cambiar foto */}
          <label className="absolute bottom-0 right-0 bg-emerald-600 rounded-full p-1 text-white text-xs cursor-pointer opacity-90 hover:opacity-100 transition-opacity block" title="Cambiar foto">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
              disabled={uploading}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 00-3-3l-9 9v3h3zm0 0v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
            </svg>
          </label>
          {/* --- FIN DESCOMENTADO --- */}
          {/* Modal de advertencia por tamaño de imagen */}
          {showSizeError && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-lg shadow-lg px-8 py-6 max-w-xs w-full flex flex-col items-center text-center">
                <svg className="h-10 w-10 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
                <div className="font-semibold text-red-600 mb-2">Debes subir una imagen menor a 2MB.</div>
                <div className="text-xs text-gray-500 mb-3">Si la pantalla se pone negra, prueba con otro navegador o reduce el tamaño de la imagen.</div>
                <button
                  className="mt-2 px-4 py-1 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                  onClick={() => setShowSizeError(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
        {error && <span className="ml-2 text-xs text-red-500">{error}</span>}

        <button className="ml-2 px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-emerald-600 hover:text-white font-semibold text-sm transition-colors" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <>
      <button className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors" onClick={() => setShowModal(true)}>
        Iniciar sesión
      </button>
      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
