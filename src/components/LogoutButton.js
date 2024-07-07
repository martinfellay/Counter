import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-red-700">
      <FaSignOutAlt />
    </button>
  );
};

export default LogoutButton;
