import "../style/App.scss";
import React from "react";
import pokemons from "../data/data.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: pokemons };
  }
  render() {
    return <PokeList pokemons={this.state.data} />;
  }
}

export default App;
