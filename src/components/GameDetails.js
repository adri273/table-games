import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../contexts/FirebaseContext';

const GameDetails = () => {
  const { id } = useParams();
  const { firebase } = useContext(FirebaseContext);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const gameRef = firebase.firestore().collection('games').doc(id);
    gameRef.get().then((doc) => {
      if (doc.exists) {
        const gameData = doc.data();
        setGame({
          id: doc.id,
          name: gameData.name,
          players: gameData.players,
          image: gameData.image,
        });
      }
    });
  }, [firebase, id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} />
      <p>Players: {game.players}</p>
    </div>
  );
};

export default GameDetails;
