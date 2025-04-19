import { AuthProvider } from '../context/AuthContext.jsx';
import Comments from './Comments.jsx';

export default function CommentsWithProvider(props) {
  return (
    <AuthProvider>
      <Comments {...props} />
    </AuthProvider>
  );
}
