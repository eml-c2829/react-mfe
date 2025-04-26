import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../core/states/authentication-slices/authentication-slice';

const allowedUsers = [
  {
    username: 'admin',
    role: 'Administrator'
  },
  {
    username: 'user',
    role: 'Normal user'
  }
]

export default function UnAuthenticatedLayout() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user =
      allowedUsers
        .filter((user) => user.username.toLowerCase() == username.toLowerCase())
        .pop();
    
    if (user) {
      dispatch(login({ username: user.username, role: user.role }));
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
