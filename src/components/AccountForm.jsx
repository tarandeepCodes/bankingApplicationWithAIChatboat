import React, { useState } from 'react';

const AccountForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, accountNumber: 'XXXX-XXXX-XXXX', balance: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Open New Account</h2>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Create Account
      </button>
    </form>
  );
};

export default AccountForm;
