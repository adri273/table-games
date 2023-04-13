import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGameContext } from "../contexts/GameContext";

const AddGame = () => {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState("");
  const [image, setImage] = useState("");
  const { dispatch } = useGameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_GAME",
      game: {
        id: uuidv4(),
        name,
        players,
        image,
      },
    });
    setName("");
    setPlayers("");
    setImage("");
  };

  return (
    <div>
      <h2>Add Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of players:</label>
          <input
            type="number"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddGame;
