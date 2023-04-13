import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../utils/firebase';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      await user.updateProfile({
        displayName: displayName,
      });
      history.push('/');
    } catch (error) {
      setError('Error registering with email and password');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Display Name:
          <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {error &&
