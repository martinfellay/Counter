import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL0Z0r6hTs_uaIFfa7SMv5MIMAd_pCON4",
  authDomain: "contador-edt.firebaseapp.com",
  databaseURL: "https://contador-edt-default-rtdb.firebaseio.com",
  projectId: "contador-edt",
  storageBucket: "contador-edt.appspot.com",
  messagingSenderId: "306954391497",
  appId: "1:306954391497:web:2cd655b467b11416ebe218",
  measurementId: "G-J1DP36JRH4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export { auth, googleProvider, firestore };




// // ..\src\firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'; // Importa Firestore

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCL0Z0r6hTs_uaIFfa7SMv5MIMAd_pCON4",
//     authDomain: "contador-edt.firebaseapp.com",
//     databaseURL: "https://contador-edt-default-rtdb.firebaseio.com",
//     projectId: "contador-edt",
//     storageBucket: "contador-edt.appspot.com",
//     messagingSenderId: "306954391497",
//     appId: "1:306954391497:web:2cd655b467b11416ebe218",
//     measurementId: "G-J1DP36JRH4"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const firestore = getFirestore(app); // Inicializa Firestore

// export { auth, googleProvider, firestore }; // Exporta Firestore