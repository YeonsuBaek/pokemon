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
  const [page, setPage] = useState(1)

  const fetchPokemons = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${(page - 1) * LIMIT}`)
      const data = await response.json()
      const pokemonsData = data.results.map(({ name, url }: { name: string; url: string }) => ({
        name,
        id: getIdFromUrl(url),
      }))
      setPokemons((prevPokemons) => {
        const newPokemons = pokemonsData.filter(
          (newPokemon: PokemonType) => !prevPokemons.some((pokemon) => pokemon.id === newPokemon.id)
        )
        return [...prevPokemons, ...newPokemons]
      })
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  useEffect(() => {
    if (searchValue.length > 0) {
      const filteredPokemons = pokemons.filter(({ id }: { id: number }) => {
        return id.toString().includes(searchValue)
      })
      setPokemons(filteredPokemons)
    } else {
      setPokemons([])
      fetchPokemons()
    }
  }, [searchValue])

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-4">
        {pokemons.map(({ id, name }: PokemonType) => (
          <PokemonItem id={id} name={name} key={id} />
        ))}
      </ul>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>더보기</button>
    </>
  )
}

export default PokemonList
