import React from 'react'
import { Link } from 'react-router-dom'

const PokemonItem = () => {
  return (
    <li className="list-none">
      <Link to="/">
        <figure className="flex flex-col items-center justify-start w-[150] gap-3">
          <img src="http://placehold.it/150X150" alt="pokemon_name" />
          <figcaption className="flex items-start justify-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-xl bg-cyan-200">1</span>
            <h2>Name</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}

export default PokemonItem
