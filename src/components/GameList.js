import React from "react";
import { useGameContext } from "../contexts/GameContext";
import Game from "./Game";

const GameList = () => {
  const { games, dispatch } = useGameContext();

  const handleClick = (id) => {
    dispatch({
      type: "REMOVE_GAME",
      id,
    });
  };

  return (
    <div>
      <h2>Game List</h2>
      {games.length > 0 ? (
        games.map((game) => (
          <Game key={game.id} game={game} handleClick={handleClick} />
        ))
      ) : (
        <p>No games added yet.</p>
      )}
    </div>
  );
};

export default GameList;
