// Este es solo un componente contenedor
import { AuthProvider } from '../context/AuthContext.jsx';
import AuthButton from './AuthButton.jsx';

export default function AuthIsland() {
  return (
    <AuthProvider>
      <AuthButton />
    </AuthProvider>
  );
} 