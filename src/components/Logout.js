import React, { useContext } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';

const Logout = () => {
  const { firebase } = useContext(FirebaseContext);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
