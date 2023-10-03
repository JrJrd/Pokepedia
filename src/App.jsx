import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './Containers/Pokedex'
import AppNavigator from "./components/AppNavigator";

function App() {
  return (
    <Router>
      <AppNavigator />
      <Route exact path="/" component={Pokedex} />
    </Router>
  );
}

export default App;
