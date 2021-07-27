import React from "react";
import "./App.css";

import Home from './page/Home'
import Room from './page/Room'
import SingelRoom from './page/SingelRoom'
import Error from './page/Error'
import Navbar from './component/Navbar'

import {Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/room" component={Room} />
      <Route exact path="/singleroom" component={SingelRoom} />
      <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
