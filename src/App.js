import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Countries, Country, Local } from "./Components/index";
import Navbar from "./Containers/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/countries" component={Countries} />
          <Route path="/local" component={Local} />
          <Route path="/country/:code" component={Country} />
          <Route path="*">
            <Redirect to="/countries" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
