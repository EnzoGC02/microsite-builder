import React, { useState, useEffect } from "react";
import TemplateBuilderHeader from "../components/Header/TemplateBuilderHeader";
import TemplateBuilder from "../components/TemplateBuilder";
import Unauthorized from "../components/Unauthorized";
import { auth } from "../components/Firebase";

const TemplateBuilderPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setTimeout(() => {
          auth.signOut();
          window.location.replace("/");
        }, 2000);
      }
    });
  }, []);
  if (loggedIn) {
    return (
      <>
        <TemplateBuilderHeader />
        <TemplateBuilder />
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
export default TemplateBuilderPage;
