import React from "react";
import { Link } from "react-router-dom";

const GameListItem = ({ game }) => {
  return (
    <li>
      <Link to={`/games/${game.id}`}>
        <img src={game.image} alt={game.name} />
        <h3>{game.name}</h3>
        <p>Number of Players: {game.players}</p>
      </Link>
    </li>
  );
};

export default GameListItem;
