import React from "react";
import { AuthProvider } from "../context/AuthContext.jsx";
import LikeButton from "./LikeButton.jsx";
import CommentsWithProvider from "./CommentsWithProvider.jsx";

export default function BlogPostReactIsland({ slug, initialLikes }) {
  return (
    <AuthProvider>
      <LikeButton slug={slug} initialLikes={initialLikes} />
      <CommentsWithProvider slug={slug} />
    </AuthProvider>
  );
}
