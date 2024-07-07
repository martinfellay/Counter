import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';

const AuthButton = ({ provider, label, icon }) => {
  const { signInWithGoogle, signInWithEmail } = useAuth();

  const handleAuth = () => {
    if (provider === 'google') {
      signInWithGoogle().catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
    } else if (provider === 'email') {
      signInWithEmail().catch((error) => {
        console.error("Error during Email sign-in:", error);
      });
    }
  };

  return (
    <button
      onClick={handleAuth}
      className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 mb-2 ${icon ? 'p-2' : ''}`}
    >
      {provider === 'google' && <FaGoogle />}
      {provider === 'email' && <FaEnvelope />}
      {!icon && <span>{label}</span>}
    </button>
  );
};

export default AuthButton;
