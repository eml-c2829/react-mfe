import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../core/states/authentication-slice';

const allowedUsers = ['van', 'john', 'sara'];

export default function UnAuthenticatedLayout() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (allowedUsers.includes(username.toLowerCase())) {
      dispatch(login(username));
    } else {
      alert('Invalid username');
    }
  };

  return (
    <div className="p-4">
      <input
        className="border p-2 mr-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button className="bg-blue-500 text-white p-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
