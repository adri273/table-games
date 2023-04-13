import React, { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  // Aquí va la configuración de Firebase
};

firebase.initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const db = firebase.firestore();
  const auth = firebase.auth();

  return (
    <FirebaseContext.Provider value={{ db, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
