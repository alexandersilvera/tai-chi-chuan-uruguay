// Servicio de Firebase para el Dashboard
// Este archivo contiene las funciones para integrar el dashboard con Firebase

import { db } from './client.js';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where, 
  limit 
} from 'firebase/firestore';

/**
 * Servicio para gestionar usuarios desde el dashboard
 */
export const UsersService = {
  // Obtener todos los usuarios con sus estadísticas
  async getAllUsers() {
    try {
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      
      const users = [];
      for (const userDoc of snapshot.docs) {
        const userData = { id: userDoc.id, ...userDoc.data() };
        
        // Obtener comentarios del usuario desde todas las subcolecciones de posts
        const commentsPromises = [];
        const postsSnapshot = await getDocs(collection(db, 'posts'));
        
        postsSnapshot.docs.forEach(postDoc => {
          const commentsQuery = query(
            collection(db, 'posts', postDoc.id, 'comments'),
            where('userId', '==', userDoc.id)
          );
          commentsPromises.push(getDocs(commentsQuery));
        });
        
        const allCommentsSnapshots = await Promise.all(commentsPromises);
        userData.comments = [];
        allCommentsSnapshots.forEach(snapshot => {
          snapshot.docs.forEach(doc => {
            userData.comments.push({
              id: doc.id,
              ...doc.data()
            });
          });
        });
        
        // Obtener likes del usuario desde todas las subcolecciones de posts
        const likesPromises = [];
        postsSnapshot.docs.forEach(postDoc => {
          const userLikeDoc = doc(db, 'posts', postDoc.id, 'likes', userDoc.id);
          likesPromises.push(getDoc(userLikeDoc));
        });
        
        const allLikesSnapshots = await Promise.all(likesPromises);
        userData.likes = [];
        allLikesSnapshots.forEach((likeDoc, index) => {
          if (likeDoc.exists()) {
            userData.likes.push({
              id: likeDoc.id,
              postId: postsSnapshot.docs[index].id,
              ...likeDoc.data()
            });
          }
        });
        
        users.push(userData);
      }
      
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Obtener un usuario específico por ID
  async getUserById(userId) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (!userDoc.exists()) {
        throw new Error('Usuario no encontrado');
      }
      
      const userData = { id: userDoc.id, ...userDoc.data() };
      
      // Obtener comentarios del usuario desde todas las subcolecciones
      const commentsPromises = [];
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      postsSnapshot.docs.forEach(postDoc => {
        const commentsQuery = query(
          collection(db, 'posts', postDoc.id, 'comments'),
          where('userId', '==', userId),
          orderBy('timestamp', 'desc')
        );
        commentsPromises.push(getDocs(commentsQuery));
      });
      
      const allCommentsSnapshots = await Promise.all(commentsPromises);
      userData.comments = [];
      allCommentsSnapshots.forEach(snapshot => {
        snapshot.docs.forEach(doc => {
          userData.comments.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
      
      // Obtener likes del usuario desde todas las subcolecciones
      const likesPromises = [];
      postsSnapshot.docs.forEach(postDoc => {
        const userLikeDoc = doc(db, 'posts', postDoc.id, 'likes', userId);
        likesPromises.push(getDoc(userLikeDoc));
      });
      
      const allLikesSnapshots = await Promise.all(likesPromises);
      userData.likes = [];
      allLikesSnapshots.forEach((likeDoc, index) => {
        if (likeDoc.exists()) {
          userData.likes.push({
            id: likeDoc.id,
            postId: postsSnapshot.docs[index].id,
            ...likeDoc.data()
          });
        }
      });
      
      return userData;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  // Actualizar el estado de administrador de un usuario
  async updateAdminStatus(userId, isAdmin) {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isAdmin: isAdmin,
        updatedAt: new Date()
      });
      return true;
    } catch (error) {
      console.error('Error updating admin status:', error);
      throw error;
    }
  },

  // Eliminar un usuario (solo admin)
  async deleteUser(userId) {
    try {
      // Obtener todos los posts para buscar comentarios y likes del usuario
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      // Eliminar comentarios del usuario de todas las subcolecciones
      for (const postDoc of postsSnapshot.docs) {
        const commentsQuery = query(
          collection(db, 'posts', postDoc.id, 'comments'),
          where('userId', '==', userId)
        );
        const commentsSnapshot = await getDocs(commentsQuery);
        
        for (const commentDoc of commentsSnapshot.docs) {
          await deleteDoc(doc(db, 'posts', postDoc.id, 'comments', commentDoc.id));
        }
        
        // Eliminar like del usuario si existe
        const userLikeDoc = doc(db, 'posts', postDoc.id, 'likes', userId);
        const likeSnapshot = await getDoc(userLikeDoc);
        if (likeSnapshot.exists()) {
          await deleteDoc(userLikeDoc);
        }
      }
      
      // Eliminar usuario
      await deleteDoc(doc(db, 'users', userId));
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
};

/**
 * Servicio para gestionar comentarios desde el dashboard
 */
export const CommentsService = {
  // Obtener todos los comentarios con información del usuario y artículo
  async getAllComments() {
    try {
      const comments = [];
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      // Obtener comentarios de todas las subcolecciones de posts
      for (const postDoc of postsSnapshot.docs) {
        const commentsQuery = query(
          collection(db, 'posts', postDoc.id, 'comments'),
          orderBy('timestamp', 'desc')
        );
        const commentsSnapshot = await getDocs(commentsQuery);
        
        for (const commentDoc of commentsSnapshot.docs) {
          const commentData = { 
            id: commentDoc.id, 
            postId: postDoc.id,
            ...commentDoc.data() 
          };
          
          // Obtener información del usuario
          if (commentData.userId) {
            const userDoc = await getDoc(doc(db, 'users', commentData.userId));
            commentData.author = userDoc.exists() ? userDoc.data() : null;
          }
          
          // Obtener información del artículo
          commentData.article = postDoc.data();
          
          comments.push(commentData);
        }
      }
      
      // Ordenar por timestamp descendente
      comments.sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(a.timestamp);
        const bTime = b.timestamp?.toDate?.() || new Date(b.timestamp);
        return bTime - aTime;
      });
      
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  // Actualizar el estado de un comentario
  async updateCommentStatus(commentId, postId, status) {
    try {
      const commentRef = doc(db, 'posts', postId, 'comments', commentId);
      await updateDoc(commentRef, {
        status: status, // 'approved', 'pending', 'flagged'
        moderatedAt: new Date()
      });
      return true;
    } catch (error) {
      console.error('Error updating comment status:', error);
      throw error;
    }
  },

  // Eliminar un comentario
  async deleteComment(commentId, postId) {
    try {
      await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
      return true;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  },

  // Obtener comentarios por artículo
  async getCommentsByPost(postId) {
    try {
      const commentsQuery = query(
        collection(db, 'posts', postId, 'comments'),
        orderBy('timestamp', 'desc')
      );
      const snapshot = await getDocs(commentsQuery);
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching comments by post:', error);
      throw error;
    }
  }
};

/**
 * Servicio para gestionar likes desde el dashboard
 */
export const LikesService = {
  // Obtener todos los likes con información del usuario y artículo
  async getAllLikes() {
    try {
      const likes = [];
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      // Obtener likes de todas las subcolecciones de posts
      for (const postDoc of postsSnapshot.docs) {
        const likesSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'likes'));
        
        for (const likeDoc of likesSnapshot.docs) {
          const likeData = { 
            id: likeDoc.id, 
            postId: postDoc.id,
            userId: likeDoc.id, // En esta estructura, el ID del doc es el userId
            ...likeDoc.data() 
          };
          
          // Obtener información del usuario
          if (likeDoc.id !== 'anonymous') {
            const userDoc = await getDoc(doc(db, 'users', likeDoc.id));
            likeData.user = userDoc.exists() ? userDoc.data() : null;
          } else {
            likeData.user = { name: 'Usuario Anónimo', isAnonymous: true };
          }
          
          // Obtener información del artículo
          likeData.article = postDoc.data();
          
          likes.push(likeData);
        }
      }
      
      // Ordenar por timestamp descendente
      likes.sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(a.timestamp);
        const bTime = b.timestamp?.toDate?.() || new Date(b.timestamp);
        return bTime - aTime;
      });
      
      return likes;
    } catch (error) {
      console.error('Error fetching likes:', error);
      throw error;
    }
  },

  // Eliminar un like
  async deleteLike(likeId, postId) {
    try {
      await deleteDoc(doc(db, 'posts', postId, 'likes', likeId));
      return true;
    } catch (error) {
      console.error('Error deleting like:', error);
      throw error;
    }
  },

  // Obtener estadísticas de likes
  async getLikesStats() {
    try {
      const stats = {
        total: 0,
        byPost: {},
        byUser: {},
        anonymous: 0,
        registered: 0
      };
      
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      for (const postDoc of postsSnapshot.docs) {
        const likesSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'likes'));
        
        stats.byPost[postDoc.id] = likesSnapshot.size;
        stats.total += likesSnapshot.size;
        
        likesSnapshot.docs.forEach(likeDoc => {
          if (likeDoc.id === 'anonymous') {
            stats.anonymous++;
          } else {
            stats.byUser[likeDoc.id] = (stats.byUser[likeDoc.id] || 0) + 1;
            stats.registered++;
          }
        });
      }
      
      return stats;
    } catch (error) {
      console.error('Error fetching likes stats:', error);
      throw error;
    }
  }
};

/**
 * Servicio para obtener estadísticas generales del dashboard
 */
export const DashboardService = {
  // Obtener estadísticas generales
  async getOverviewStats() {
    try {
      // Obtener conteo de usuarios
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersCount = usersSnapshot.size;
      const adminCount = usersSnapshot.docs.filter(doc => doc.data().isAdmin).length;
      
      // Obtener conteo de posts
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      const postsCount = postsSnapshot.size;
      
      // Obtener conteo de comentarios y likes de todas las subcolecciones
      let commentsCount = 0;
      let likesCount = 0;
      
      for (const postDoc of postsSnapshot.docs) {
        const commentsSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'comments'));
        const likesSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'likes'));
        
        commentsCount += commentsSnapshot.size;
        likesCount += likesSnapshot.size;
      }
      
      return {
        totalUsers: usersCount,
        adminUsers: adminCount,
        totalPosts: postsCount,
        totalComments: commentsCount,
        totalLikes: likesCount
      };
    } catch (error) {
      console.error('Error fetching overview stats:', error);
      throw error;
    }
  },

  // Obtener actividad reciente
  async getRecentActivity(limitCount = 10) {
    try {
      const activities = [];
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      
      // Obtener comentarios recientes de todas las subcolecciones
      for (const postDoc of postsSnapshot.docs) {
        const commentsQuery = query(
          collection(db, 'posts', postDoc.id, 'comments'),
          orderBy('timestamp', 'desc'),
          limit(Math.ceil(limitCount / 4))
        );
        const commentsSnapshot = await getDocs(commentsQuery);
        
        for (const commentDoc of commentsSnapshot.docs) {
          const data = commentDoc.data();
          const userDoc = await getDoc(doc(db, 'users', data.userId));
          
          activities.push({
            type: 'comment',
            timestamp: data.timestamp,
            user: userDoc.exists() ? userDoc.data().displayName : 'Usuario desconocido',
            article: postDoc.data().title || 'Artículo desconocido',
            time: this.getRelativeTime(data.timestamp)
          });
        }
        
        // Obtener likes recientes
        const likesSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'likes'));
        const likesArray = likesSnapshot.docs
          .map(doc => ({
            id: doc.id,
            postId: postDoc.id,
            postTitle: postDoc.data().title,
            ...doc.data()
          }))
          .sort((a, b) => {
            const aTime = a.timestamp?.toDate?.() || new Date(a.timestamp);
            const bTime = b.timestamp?.toDate?.() || new Date(b.timestamp);
            return bTime - aTime;
          })
          .slice(0, Math.ceil(limitCount / 4));
        
        for (const likeData of likesArray) {
          let userName = 'Usuario Anónimo';
          if (likeData.id !== 'anonymous') {
            const userDoc = await getDoc(doc(db, 'users', likeData.id));
            userName = userDoc.exists() ? userDoc.data().displayName : 'Usuario desconocido';
          }
          
          activities.push({
            type: 'like',
            timestamp: likeData.timestamp,
            user: userName,
            article: likeData.postTitle || 'Artículo desconocido',
            time: this.getRelativeTime(likeData.timestamp)
          });
        }
      }
      
      // Ordenar por timestamp descendente y limitar
      return activities
        .sort((a, b) => {
          const aTime = a.timestamp?.toDate?.() || new Date(a.timestamp);
          const bTime = b.timestamp?.toDate?.() || new Date(b.timestamp);
          return bTime - aTime;
        })
        .slice(0, limitCount);
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      throw error;
    }
  },

  // Función auxiliar para obtener tiempo relativo
  getRelativeTime(timestamp) {
    const now = new Date();
    const then = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const diffInMinutes = Math.floor((now - then) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora mismo';
    if (diffInMinutes < 60) return `${diffInMinutes} min`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
  }
};

/**
 * Servicio para gestionar posts/artículos desde el dashboard
 */
export const PostsService = {
  // Obtener todos los posts con estadísticas
  async getAllPosts() {
    try {
      const postsRef = collection(db, 'posts');
      const snapshot = await getDocs(postsRef);
      
      const posts = [];
      for (const postDoc of snapshot.docs) {
        const postData = { id: postDoc.id, ...postDoc.data() };
        
        // Obtener conteo de likes
        const likesSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'likes'));
        postData.likesCount = likesSnapshot.size;
        
        // Obtener conteo de comentarios
        const commentsSnapshot = await getDocs(collection(db, 'posts', postDoc.id, 'comments'));
        postData.commentsCount = commentsSnapshot.size;
        
        posts.push(postData);
      }
      
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // Actualizar un post
  async updatePost(postId, updateData) {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        ...updateData,
        updatedAt: new Date()
      });
      return true;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  // Eliminar un post y sus datos relacionados
  async deletePost(postId) {
    try {
      // Eliminar comentarios del post
      const commentsSnapshot = await getDocs(collection(db, 'posts', postId, 'comments'));
      for (const commentDoc of commentsSnapshot.docs) {
        await deleteDoc(doc(db, 'posts', postId, 'comments', commentDoc.id));
      }
      
      // Eliminar likes del post
      const likesSnapshot = await getDocs(collection(db, 'posts', postId, 'likes'));
      for (const likeDoc of likesSnapshot.docs) {
        await deleteDoc(doc(db, 'posts', postId, 'likes', likeDoc.id));
      }
      
      // Eliminar post
      await deleteDoc(doc(db, 'posts', postId));
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
};

// Exportar todos los servicios
export default {
  Users: UsersService,
  Comments: CommentsService,
  Likes: LikesService,
  Dashboard: DashboardService,
  Posts: PostsService
};