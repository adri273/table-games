import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../contexts/FirebaseContext';

const AddGame = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(image.name);
    imageRef.put(image).then(() => {
      imageRef.getDownloadURL().then((url) => {
        const gamesRef = firebase.firestore().collection('games');
        gamesRef.add({
          name,
          players,
          image: url,
        }).then(() => {
          history.push('/');
        });
      });
    });
  };

  return (
    <div>
      <h1>Add Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="players">Players:</label>
          <input
            type="text"
            id="players"
            value={players}
            onChange={(event) => setPlayers(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddGame;
