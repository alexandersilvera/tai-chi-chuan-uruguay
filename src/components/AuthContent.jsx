import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthButton from './AuthButton';

export default function AuthContent() {
  const { user } = useAuth();

  return (
    <>
      {user && user.isAdmin && (
        <a
          href="/admin"
          className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Panel de Administración
        </a>
      )}
      <AuthButton />
    </>
  );
}
