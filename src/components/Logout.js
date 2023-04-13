import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    history.push('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
