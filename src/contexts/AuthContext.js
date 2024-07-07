import React, { useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase'; // Asegúrate de importar el proveedor de Google
import { signInWithPopup } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signOut = () => {
    return auth.signOut();
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithEmail = () => {
    // Implementa tu lógica de inicio de sesión con email aquí
  };

  const value = {
    user: currentUser,
    signOut,
    signInWithGoogle,
    signInWithEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
