import React from 'react';

const Home = ({ onOpenAccount, onLogin }) => (
  <div className="text-center space-y-4 bg-white p-6 rounded shadow">
    <p className="text-lg">Welcome to My Bank</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onOpenAccount}
    >
      Open an Account
    </button>
    <button
      className="bg-green-500 text-white px-4 py-2 rounded"
      onClick={onLogin}
    >
      Login
    </button>
  </div>
);

export default Home;
