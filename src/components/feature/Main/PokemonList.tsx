import React, { useEffect, useState } from 'react'
import PokemonItem from './PokemonItem'

type PokemonType = {
  id: number
  name: string
  url?: string
}

const LIMIT = 30

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=0`)
        const data = await response.json()
        const pokemonsData = data.results.map((pokemon: { name: string; url: string }, index: number) => {
          return {
            ...pokemon,
            id: index + 1,
          }
        })
        setPokemons(pokemonsData)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {pokemons.map((pokemon: PokemonType) => (
        <PokemonItem />
      ))}
    </ul>
  )
}

export default PokemonList
