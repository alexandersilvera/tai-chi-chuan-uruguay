import React from 'react';
import { AuthProvider } from '@/context/AuthContext.jsx';
import ArticleManager from './ArticleManager.tsx';

export default function ArticleManagerWithProvider() {
  return (
    <AuthProvider>
      <ArticleManager />
    </AuthProvider>
  );
}
