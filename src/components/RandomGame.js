import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { Link } from "react-router-dom";

const RandomGame = () => {
  const { db } = useContext(FirebaseContext);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("games").onSnapshot((snapshot) => {
      const gamesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGames(gamesData);
    });

    return () => unsubscribe();
  }, [db]);

  const randomIndex = Math.floor(Math.random() * games.length);
  const randomGame = games[randomIndex];

  return (
    <div className="random-game-container">
      <h2>Random Game:</h2>
      {games.length ? (
        <div className="game-details-container">
          <div className="game-image-container">
            <img
              src={randomGame.image}
              alt={`Cover of ${randomGame.name}`}
              className="game-image"
            />
          </div>
          <div className="game-details">
            <h3 className="game-name">{randomGame.name}</h3>
            <p>Number of Players: {randomGame.players}</p>
            <Link to={`/game/${randomGame.id}`} className="link-button">
              View Details
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomGame;
