import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Unauthorized from '../components/Unauthorized';
import { auth } from '../components/Firebase';

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setTimeout(() => {
          auth.signOut();
          window.location.replace('/');
        }, 2000);
      }
    });
  }, []);
  if (loggedIn) {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  } else {
    return (
      <>
        <Unauthorized />
      </>
    );
  }
};

export default HomePage;
