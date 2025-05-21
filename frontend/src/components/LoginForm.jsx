// src/components/LoginForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    /*try {
      const res = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });*/


      const { userType } = res.data;

      if (userType === 'admin') {
        navigate('/admin');
      } else if (userType === 'user') {
        navigate('/user');
      } else {
        setError('Unknown user type');
      }
    } 
    /*catch (err) {
      setError('Invalid email or password');
    }
  };*/

  return (
    <div className = "formBox">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <h4>Welcome back, please enter your details</h4>
      {error && <p className="text-red-500">{error}</p>}
      <div className = "inputs">
      <input
        type="email"
        placeholder="Email"
        className="input-box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="input-box"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </div>
      <button
        type="submit"
        className="submit-button"
      >
        Login
      </button>
    </form>
    </div>
  );
}
