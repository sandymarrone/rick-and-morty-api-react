function Card( {personaje} ) {
  return (
    <div>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <small>{personaje.status}</small> <br />
      <small>Especie: {personaje.species}</small>
    </div>
  )
}

export default Card