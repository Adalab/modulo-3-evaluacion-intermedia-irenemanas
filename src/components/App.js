import "../style/App.scss";
import React from "react";
import pokemons from "../data/data.json";
import PokeList from "./PokeList";

class App extends React.Component {
  render() {
    return <PokeList pokemons={pokemons} />;
  }
}

export default App;
