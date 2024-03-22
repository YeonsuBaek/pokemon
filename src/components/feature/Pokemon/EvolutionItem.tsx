import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../../block/PokemonCard'

interface EvolutionItemProps {
  name: string
  id: number
  hasNext: boolean
}

const EvolutionItem = ({ name, id, hasNext }: EvolutionItemProps) => {
  return (
    <li key={id} className={hasNext ? "after:content-['▶️'] after:mx-4 flex items-center" : ''}>
      <Link to={`/pokemon/${id}`}>
        <PokemonCard name={name} id={id} size="small" />
      </Link>
    </li>
  )
}

export default EvolutionItem
