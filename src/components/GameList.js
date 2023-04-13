import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../utils/firebase';
import GameListItem from './GameListItem';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .onSnapshot((snapshot) => {
        const newGames = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGames(newGames);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>
              <GameListItem game={game} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
