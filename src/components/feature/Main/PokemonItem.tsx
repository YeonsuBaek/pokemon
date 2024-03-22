import React from 'react'
import { Link } from 'react-router-dom'

interface PokemonItemProps {
  id: number
  name: string
}

const PokemonItem = ({ id, name }: PokemonItemProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <li className="list-none">
      <Link to={`/pokemon/${id}`}>
        <figure className="flex flex-col items-center justify-start w-[150px] gap-3">
          <img src={imageUrl} alt={name} />
          <figcaption className="flex items-start justify-center gap-2">
            <span className="w-6 h-6 flex-center rounded-xl bg-cyan-200">{id}</span>
            <h2>{name}</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}

export default PokemonItem
