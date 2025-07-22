import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Welcome, {user.name}</h2>
      <p>Account Number: {user.accountNumber}</p>
      <p>Balance: ₹{user.balance}</p>
      <button
        onClick={onLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
