import React, { useState, useEffect } from 'react';
import BuilderHeader from '../components/Header/BuilderHeader';
import Builder from '../components/Builder';
import Unauthorized from '../components/Unauthorized';
import { auth } from '../components/Firebase';

const BuilderPage = () => {
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
        <BuilderHeader />
        <Builder />
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
export default BuilderPage;
