import React from 'react';

const GameListItem = ({ game }) => (
  <div>
    <img src={game.image} alt={game.name} />
    <h2>{game.name}</h2>
    <p>Players: {game.players}</p>
  </div>
);

export default GameListItem;
