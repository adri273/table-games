import React, { useState } from "react";

const GameForm = ({ onSave }) => {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, players, image });
    setName("");
    setPlayers("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="players">Number of Players:</label>
      <input
        type="number"
        id="players"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
        required
      />

      <label htmlFor="image">Image URL:</label>
      <input
        type="url"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <button type="submit">Add Game</button>
    </form>
  );
};

export default GameForm;
