import React from "react";

const Game = ({ game, handleClick }) => {
  return (
    <div>
      <h3>{game.name}</h3>
      <img src={game.image} alt={game.name} />
      <p>Number of players: {game.players}</p>
      <button onClick={() => handleClick(game.id)}>Remove</button>
    </div>
  );
};

export default Game;
