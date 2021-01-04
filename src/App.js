import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import EachFlag from "./Components/EachFlag";
import './Styles/main.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={EachFlag} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
