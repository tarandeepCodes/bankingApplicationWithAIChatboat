// App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import AccountForm from './components/AccountForm';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import FloatingChat from './components/FloatingChat';

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('bankUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setPage('dashboard');
    }
  }, []);

  const handleAccountCreation = (userData) => {
    setUser(userData);
    localStorage.setItem('bankUser', JSON.stringify(userData));
    setPage('dashboard');
  };

  const handleLogin = (name) => {
    const loggedInUser = {
      name,
      accountNumber: 'XXXX-XXXX-XXXX',
      balance: 1000,
    };
    setUser(loggedInUser);
    localStorage.setItem('bankUser', JSON.stringify(loggedInUser));
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('bankUser');
    setPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 relative font-sans">
     <header className="mb-10">
        <div className="ml-100">
          <img
            src="/mybankLogo.png"
            alt="Bank Logo"
            className="w-24 h-24 mb-1"
          />
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-blue-800 tracking-wide">MyBank</h1>
            <p className="text-sm text-gray-600 mt-1">Your Trusted Financial Partner</p>
          </div>
        </div>
      </header>


      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {page === 'home' && (
          <Home onOpenAccount={() => setPage('openAccount')} onLogin={() => setPage('login')} />
        )}

        {page === 'openAccount' && (
          <div>
            <button onClick={() => setPage('home')} className="mb-4 text-blue-600 underline">
              ← Back to Home
            </button>
            <AccountForm onSubmit={handleAccountCreation} />
          </div>
        )}

        {page === 'login' && (
          <div>
            <button onClick={() => setPage('home')} className="mb-4 text-blue-600 underline">
              ← Back to Home
            </button>
            <Login onLogin={handleLogin} />
          </div>
        )}

        {page === 'dashboard' && <Dashboard user={user} onLogout={handleLogout} />}
      </main>

      {/* Tara - AI Assistant Chat Floating Button */}
      <FloatingChat />
    </div>
  );
}

export default App;
