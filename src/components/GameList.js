import React from "react";
import GameListItem from "./GameListItem";

const GameList = ({ games }) => {
  return (
    <ul>
      {games.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GameList;
