// src/services/authService.js
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase'; // Asegúrate de importar auth correctamente

export const signInWithEmail = (email, password) => {
  // Lógica para iniciar sesión con email y contraseña
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  // Lógica para iniciar sesión con Google
  return signInWithPopup(auth, googleProvider);
};


