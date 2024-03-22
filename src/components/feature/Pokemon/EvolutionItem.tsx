import React from 'react'
import { Link } from 'react-router-dom'

interface EvolutionItemProps {
  name: string
  id: number
  hasNext: boolean
}

const EvolutionItem = ({ name, id, hasNext }: EvolutionItemProps) => {
  return (
    <li key={id} className={hasNext ? "after:content-['▶️'] after:mx-4 flex items-center" : ''}>
      <Link to={`/pokemon/${id}`}>
        <figure className="flex flex-col items-center">
          <img
            className="mb-2 w-[100px] h-[100px]"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="Name"
          />
          <figcaption className="flex flex-col items-center">
            <span className="text-gray-500">No.{id}</span>
            <h2>{name}</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}

export default EvolutionItem
