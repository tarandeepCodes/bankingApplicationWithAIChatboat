import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onLogin(name);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
