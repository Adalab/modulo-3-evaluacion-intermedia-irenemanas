import "../style/App.scss";

function Pokemon(props) {
  return (
    <article className='page-list__item'>
      <img src={props.pokProp.url} alt='Pokemon' className='page-list__item--image' />
      <h3 className='page-list__item--title'>{props.pokProp.name}</h3>
      <p className='page-list__item--type'>
        {props.pokProp.types[0]} {props.pokProp.types[1]}
      </p>
    </article>
  );
}

export default Pokemon;
