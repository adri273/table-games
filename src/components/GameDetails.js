import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../utils/firebase';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setGame({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          console.log('No such document!');
        }
      });
    return () => unsubscribe();
  }, [id]);

  return (
    <div>
      {game ? (
        <div>
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} />
          <p>Players: {game.players}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GameDetails;
