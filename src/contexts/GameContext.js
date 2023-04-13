import React, { createContext, useState, useEffect } from 'react';
import { firestore } from '../firebase';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('games').onSnapshot(snapshot => {
      const updatedGames = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGames(updatedGames);
    });

    return unsubscribe;
  }, []);

  const getGameById = (id) => {
    return games.find(game => game.id === id);
  };

  const value = {
    games,
    getGameById
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
