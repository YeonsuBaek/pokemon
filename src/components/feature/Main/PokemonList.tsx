import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
    </ul>
  )
}

export default PokemonList
