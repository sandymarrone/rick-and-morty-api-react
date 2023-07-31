import { useEffect, useState } from "react"
import Card from "./Card"
import './CardsList.css'

function NavButtons(props) {
  return (
    <>
      <button onClick={() => props.setPage(props.page + 1)}>Siguiente ({props.page + 1})</button>
      <small>Página actual: {props.page}</small>
    </>
  )
}

function CardsList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => { 
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => response.json())
        .then(data => {
          setData(data.results)
        })
  }, [page])

  return (
    <>
      <header>
            <h1>Personajes de Rick and Morty</h1>
      </header>

      <NavButtons page={page} setPage={setPage} />

      <div className="grid">
        {data.map(personaje => (
          <Card key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </>
  )
}

export default CardsList