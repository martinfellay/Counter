import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import CounterList from '../components/CounterList';
import ExportButton from '../components/ExportButton';
import LogoutButton from '../components/LogoutButton';
import AuthButton from '../components/AuthButton';
import { useLocation } from 'react-router-dom';
import { addData, getData, saveDataLocally, loadDataLocally } from '../services/firestoreService';

const AppMain = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [counters, setCounters] = useState([]);
  const [title, setTitle] = useState(location?.state?.title || 'Mi Lista');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCounters = async () => {
      if (user) {
        const savedCounters = await getData(user.uid);
        setCounters(savedCounters.length ? savedCounters : [{ name: 'Nuevo Contador', color: '#ffffff', count: 0 }]);
      } else {
        const localCounters = loadDataLocally();
        setCounters(localCounters);
      }
    };
    fetchCounters();
  }, [user]);

  useEffect(() => {
    if (!user) {
      saveDataLocally(counters);
    }
  }, [counters, user]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const addCounter = () => {
    const newCounter = { name: 'Nuevo Contador', color: '#ffffff', count: 0 };
    const newCounters = [...counters, newCounter];
    setCounters(newCounters);
    if (user) {
      addData(user.uid, newCounters);
    } else {
      saveDataLocally(newCounters);
    }
  };

  const updateCounter = (index, updatedCounter) => {
    const updatedCounters = counters.map((counter, i) => (i === index ? updatedCounter : counter));
    setCounters(updatedCounters);
    if (user) {
      addData(user.uid, updatedCounters);
    } else {
      saveDataLocally(updatedCounters);
    }
  };

  
  const saveList = () => {
    if (user) {
      addData(user.uid, counters);
      setMessage('¡Se guardó la lista!');
      setTimeout(() => {
        setMessage('No se guardo!');
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <nav className="w-full flex justify-between items-center p-4 bg-gray-800">
        <span className="text-xl font-bold">Contador App</span>
        {user ? (
          <div className="flex items-center space-x-4">
            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
            <span>{user.displayName}</span>
            <LogoutButton />
          </div>
        ) : (
          <AuthButton provider="google" icon />
        )}
      </nav>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="text-3xl font-bold mb-4 bg-transparent border-b border-gray-600 text-center"
      />
      <CounterList counters={counters} updateCounter={updateCounter} addCounter={addCounter} />
      <button
        onClick={saveList}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        style={{ marginBottom: '20px' }}
      >
        Guardar Lista
      {message && <p className="text-green-400">{message}</p>}
      </button>
      <ExportButton counters={counters} />
      <footer className="mt-8 text-center">
        <p>Realizado por Mfellay - <a href="mailto:tinchoedt@gmail.com" className="text-blue-500">consultas aquí</a></p>
      </footer>
    </div>
  );
};

export default AppMain;
