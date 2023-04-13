import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('games').onSnapshot((snapshot) => {
      const newGames = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setGames(newGames);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>My Board Games</h1>
      <Link to="/login">Log in</Link>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>
              <h2>{game.name}</h2>
              <img src={game.image} alt={game.name} />
              <p>Players: {game.players}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
