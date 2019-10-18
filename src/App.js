import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import {Route, NavLink} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
