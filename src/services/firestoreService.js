import { firestore } from '../firebase'; // Asegúrate de importar firestore correctamente
import { getDoc, doc, setDoc } from 'firebase/firestore';

// Función para agregar o actualizar datos
export const addData = async (uid, counters) => {
  try {
    const docRef = doc(firestore, 'users', uid);
    await setDoc(docRef, { counters }, { merge: true });
    console.log('Document successfully written!');
  } catch (e) {
    console.error('Error writing document: ', e);
  }
};

// Función para obtener datos
export const getData = async (uid) => {
  const docRef = doc(firestore, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().counters;
  } else {
    console.log('No such document!');
    return [];
  }
};

// Funciones para el almacenamiento local (opcional)
export const saveDataLocally = (counters) => {
  localStorage.setItem('counters', JSON.stringify(counters));
};

export const loadDataLocally = () => {
  const data = localStorage.getItem('counters');
  return data ? JSON.parse(data) : [{ name: 'Nuevo Contador', color: '#ffffff', count: 0 }];
};
