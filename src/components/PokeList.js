import "../style/App.scss";
import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const item = this.props.pokemons.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id}>
          <Pokemon pokProp={pokemonItem} />
        </li>
      );
    });
    return (
      <div className='page'>
        <h1 className='page-title'>Mi lista de pokemon</h1>
        <ul className='page-list'>{item}</ul>
      </div>
    );
  }
}

export default PokeList;
