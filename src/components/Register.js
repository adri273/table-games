import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';

const Register = () => {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
      });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="submit">Register</button>
      {error && <div>{error.message}</div>}
    </form>
  );
};

export default Register;
