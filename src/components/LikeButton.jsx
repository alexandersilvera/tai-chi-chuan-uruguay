// src/components/LikeButton.jsx
import React from 'react'; // Asegurarse de importar React

export default function LikeButton({ slug, initialLikes }) {
  // ¡El log más simple posible!
  console.log("[LikeButton] MINIMAL RENDER - Slug:", slug, "InitialLikes:", initialLikes);

  // Renderiza algo básico, sin estado ni lógica
  return (
    <div style={{ border: '2px solid red', padding: '5px', margin: '5px' }}>
      Minimal Like Button Placeholder (Slug: {slug})
    </div>
  );
}

// ¡No hay useEffect, useState, ni llamadas a Firebase!