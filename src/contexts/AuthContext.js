import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return auth.signOut();
  };

  const register = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const resetPassword = async (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = async (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = async (password) => {
    return currentUser.updatePassword(password);
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
