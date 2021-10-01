import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Movies from "./components/Movies";
import Logout from "./components/Logout";
import End from "./components/End";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Movies" exact component={Movies}></Route>
          <Route path="/Movies/:id" component={Logout}></Route>
          <Route path="/End" exact component={End}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
