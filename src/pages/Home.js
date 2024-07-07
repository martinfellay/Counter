import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthButton from '../components/AuthButton';

const Home = () => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/app');
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/app', { state: { title: inputValue } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">¿Qué vas a contar?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe aquí..."
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Añadir
        </button>
      </form>
      <div className="mt-8">
        <AuthButton provider="google" label="Iniciar con Google" />
        <AuthButton provider="email" label="Iniciar con Email" />
      </div>
    </div>
  );
};

export default Home;
