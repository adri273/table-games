import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => (
  <div>
    <Link to={`/games/${game.id}`}>
      <h2>{game.name}</h2>
      <img src={game.image} alt={game.name} />
    </Link>
  </div>
);

export default Game;
