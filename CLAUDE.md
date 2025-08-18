# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Tai Chi Sun Uruguay, featuring a blog system with authentication, user management, and administrative dashboard. The site includes static content pages about Tai Chi, dynamic blog functionality with comments and likes, and a Firebase-powered backend.

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview build locally |
| `npm install` | Install dependencies |
| `npm run astro check` | Type-check and validate Astro code |
| `npm run astro add <integration>` | Add new Astro integration |

## Architecture

### Technology Stack
- **Frontend Framework**: Astro with React islands for interactive components
- **Styling**: Tailwind CSS with Alpine.js for lightweight interactions
- **Backend**: Firebase (Firestore + Authentication + Admin SDK)
- **Deployment**: Vercel with server-side rendering enabled
- **Content Management**: Markdown files in `src/content/blog/`

### Key Directories
```
src/
├── components/           # Reusable UI components
│   ├── dashboard/       # Admin dashboard components
│   └── *.jsx           # React components for islands
├── context/             # React contexts (AuthContext)
├── layouts/             # Page layouts (Layout.astro, DashboardLayout.astro)
├── lib/
│   └── firebase/       # Firebase configuration and utilities
├── pages/              # File-based routing
│   ├── dashboard/      # Admin panel pages
│   └── blog/          # Blog routing
└── content/
    └── blog/          # Markdown blog posts
```

### Firebase Integration

**Authentication**: Google OAuth with custom user management
- User data stored in Firestore `users` collection
- Admin status managed via `isAdmin` field
- Session handling with both client and server-side auth

**Firestore Collections**:
- `posts/{postId}` - Blog post metadata and engagement
  - `likes/{userId}` - Individual like records
  - `comments/{commentId}` - User comments
- `users/{userId}` - User profiles and admin status

**Security Rules**: Comprehensive rules in `firestore.rules`
- Public read access for posts and comments
- Authenticated users can like/comment
- Admin-only write access for post management
- User-specific data protection

### Component Architecture

**Astro Components** (`.astro`): Server-rendered content, layouts, static pages
**React Islands** (`.jsx`): Interactive features requiring client-side state
- Authentication flows (`AuthIsland`, `AuthButton`, `AuthModal`)
- Blog interactions (`LikeButton`, `Comments`)
- Dashboard management (`UserDashboardIsland`, `UserDetail`)

### Environment Configuration

Required environment variables:
```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Firebase client config in `src/lib/firebase/client.js`
Firebase admin config in `src/lib/firebase/admin.js`

### Authentication Flow

1. Client-side: Google OAuth via `AuthContext.jsx`
2. User data synced to Firestore on login
3. Admin status checked from Firestore document
4. Server-side validation via Firebase Admin SDK
5. Dashboard access restricted to admin users

### Content Management

**Blog Posts**: Markdown files in `src/content/blog/` with frontmatter
**Static Pages**: `.astro` files in `src/pages/`
**Dynamic Routing**: `[...slug].astro` for blog posts, `[tag].astro` for categories

**Blog Features**:
- Pagination via `page/[page].astro`
- Tag-based filtering via `tag/[tag].astro`
- Like system (authenticated and anonymous)
- Comment system (authenticated only)

### Dashboard Functionality

Protected admin routes under `/dashboard/`:
- User management (`/dashboard/usuarios`, `/dashboard/users/[id]`)
- Content moderation (`/dashboard/articulos`, `/dashboard/comentarios`)
- Analytics (`/dashboard/likes`)

Access control via server-side Firebase Admin SDK verification.

### Development Notes

- Server-side rendering enabled for dashboard pages (`prerender = false`)
- React components use Astro's island architecture for optimal performance
- Firebase Admin SDK handles server-side authentication
- Tailwind configured with custom green color scheme
- Alpine.js used for simple interactive elements
- Vercel deployment with custom rewrites in `vercel.json`

### Testing Firebase Connection

Use `test-firebase.html` and `src/utils/firebaseDebug.js` for debugging Firebase connectivity issues.

### Important File Locations

- **Astro Config**: `astro.config.mjs` - Main configuration with Vercel adapter, React, Tailwind, Alpine.js
- **Firebase Rules**: `firestore.rules` - Security rules for Firestore database
- **Vercel Config**: `vercel.json` - Deployment configuration and rewrites
- **Environment Setup**: Requires Firebase credentials in environment variables