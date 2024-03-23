import React, { useEffect, useRef, useState } from 'react'
import PokemonItem from './PokemonItem'
import { getIdFromUrl } from '../../../utils/common'
import usePokemonStore, { PokemonStore, PokemonType } from '../../../stores/Pokemon'

interface PokemonListProps {
  searchValue: string
}

const LIMIT = 30

const PokemonList = ({ searchValue }: PokemonListProps) => {
  const { pokemons, setPokemons, setFilteredPokemon, setPokemonsReset }: PokemonStore = usePokemonStore()
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const endOfListRef = useRef<HTMLLIElement>(null)

  const fetchPokemons = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${(page - 1) * LIMIT}`)
      const data = await response.json()
      const pokemonsData = data.results.map(({ name, url }: { name: string; url: string }) => ({
        name,
        id: getIdFromUrl(url),
      }))
      setPokemons(pokemonsData)
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchFilteredPokemon = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      const pokemonsData = {
        name: data.name,
        id,
      }
      setFilteredPokemon(pokemonsData)
    } catch (error) {
      setPokemons([])
      setIsNotFound(true)
    }
  }

  useEffect(() => {
    if (page === 0) {
      setPokemonsReset()
    }
    fetchPokemons()
  }, [page])

  useEffect(() => {
    setPokemonsReset()
    if (isNotFound) {
      setIsNotFound(false)
    }
    if (searchValue.length > 0) {
      fetchFilteredPokemon(Number(searchValue))
    } else {
      setPokemons([])
      setPage(0)
    }
  }, [searchValue])

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    if (!searchValue) {
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 0,
      })
      const endOfListElement = endOfListRef.current
      if (endOfListElement) {
        observer.observe(endOfListElement)
      }

      return () => {
        if (observer) {
          observer.disconnect()
        }
      }
    }
  }, [searchValue])

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-4">
        {pokemons.map(({ id, name }: PokemonType) => (
          <PokemonItem id={id} name={name} key={id} />
        ))}
        <li className="none" ref={endOfListRef} />
      </ul>
      {isNotFound && <p>포켓몬을 찾을 수 없습니다.</p>}
    </>
  )
}

export default PokemonList
