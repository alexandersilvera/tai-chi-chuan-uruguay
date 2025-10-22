import React from 'react';
import { AuthProvider } from '@/context/AuthContext.jsx';
import LikeButton from './LikeButton.jsx';

export default function LikeButtonWithProvider({ slug, initialLikes }) {
  return (
    <AuthProvider>
      <LikeButton slug={slug} initialLikes={initialLikes} />
    </AuthProvider>
  );
}
