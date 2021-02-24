import "../style/App.scss";

function Pokemon(props) {
  return (
    <article>
      <img src={props.pokProp.url} alt='Pokemon' />
      <h2>{props.pokProp.name}</h2>
      <p>{props.pokProp.types}</p>
    </article>
  );
}

export default Pokemon;
