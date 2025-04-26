import { useSelector } from 'react-redux';
import './App.css';
import AuthenticatedLayout from './components/layouts/authenticated-layout';
import UnAuthenticatedLayout from './components/layouts/unauthenticated-layout';
import { RootState } from './core/states/state-store';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? <AuthenticatedLayout /> : <UnAuthenticatedLayout />;
}

export default App;
