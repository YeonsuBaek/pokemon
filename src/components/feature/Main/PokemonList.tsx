import React, { useEffect, useState } from 'react'
import PokemonItem from './PokemonItem'
import { getIdFromUrl } from '../../../utils/common'

type PokemonType = {
  id: number
  name: string
}

interface PokemonListProps {
  searchValue: string
}

const LIMIT = 30

const PokemonList = ({ searchValue }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=0`)
        const data = await response.json()
        const filteredPokemons = data.results.filter(({ url }: { url: string }) => {
          const id = getIdFromUrl(url).toString()
          return id.includes(searchValue)
        })
        const pokemonsData = filteredPokemons.map(({ name, url }: { name: string; url: string }) => {
          const id = getIdFromUrl(url)
          return {
            name,
            id,
          }
        })
        setPokemons(pokemonsData)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemons()
  }, [searchValue])

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {pokemons.map(({ id, name }: PokemonType) => (
        <PokemonItem id={id} name={name} key={id} />
      ))}
    </ul>
  )
}

export default PokemonList
