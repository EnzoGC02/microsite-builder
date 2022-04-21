import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ All pages Import
 */
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import NewProject from "./pages/NewProject";
import NewPage from "./pages/NewPage";
import ProjectPages from "./pages/ProjectPages";
import TemplateBuilder from "./pages/TemplateBuilder";
import AddAccount from "./components/Admin/Accounts/AddAccount";
import ManageAccount from "./components/Admin/Accounts/ManageAccount";
import SettingsPage from "./pages/PageSettings";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Login}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/unauthorized"}`}
          component={Unauthorized}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/home"}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/project/builder/:pageId"}`}
          component={Builder}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/template/builder/"}`}
          component={TemplateBuilder}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/admin"}`}
          component={Admin}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/admin/account/add-account"}`}
          component={AddAccount}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/profile"}`}
          component={Profile}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/projects/new-project"}`}
          component={NewProject}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/projects/new-page/:projectId"}`}
          component={NewPage}
        />
        <Route
          exact
          path={`${
            process.env.PUBLIC_URL + "/admin/account/manage-account/:accountId"
          }`}
          component={ManageAccount}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/project/:projectId"}`}
          component={ProjectPages}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/project/page/settings/:pageId"}`}
          component={SettingsPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
