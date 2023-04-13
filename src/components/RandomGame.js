import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';

const RandomGame = () => {
  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .onSnapshot((snapshot) => {
        const games = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const randomIndex = Math.floor(Math.random() * games.length);
        setRandomGame(games[randomIndex]);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Random Game</h1>
{randomGame ? (
        <div>
          <h2>{randomGame.name}</h2>
          <img src={randomGame.image} alt={randomGame.name} />
          <p>Players: {randomGame.players}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomGame;
