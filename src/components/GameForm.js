import React, { useState } from 'react';
import firebase from '../utils/firebase';

const GameForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [players, setPlayers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('games').add({
      name,
      image,
      players,
    });
    setName('');
    setImage('');
    setPlayers('');
  };

  return (
    <div>
      <h1>Add Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Players:
          <input type="text" value={players} onChange={(e) => setPlayers(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default GameForm;
