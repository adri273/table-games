import React from "react";

const GameDetail = ({ game }) => {
  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.image} alt={game.name} />
      <p>Number of players: {game.players}</p>
    </div>
  );
};

export default GameDetail;
