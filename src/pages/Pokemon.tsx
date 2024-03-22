import { Button } from '@yeonsubaek/yeonsui'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type typeOfInfoType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type informationType = {
  height: number
  name: string
  types: typeOfInfoType[]
  weight: number
}

type evolutionType = {
  name: string
  id: number
}

const Pokemon = () => {
  const { id } = useParams()
  const [information, setInformation] = useState<informationType>()
  const [evolutionLevel, setEvolutionLevel] = useState<evolutionType[]>([])

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  useEffect(() => {
    const fetchEvolution = async (url: string) => {
      try {
        const evolution = await fetch(url)
        const evolutionData = await evolution.json()
        const newLevel = []
        let elem = evolutionData.chain
        while (elem) {
          if (elem.species?.name && elem.species?.url) {
            const { name, url: pokemonUrl } = elem.species
            const id = Number(
              pokemonUrl
                .split('/')
                .filter((part: string) => !!part)
                .pop()
            )
            newLevel.push({ name, id })
          }
          elem = elem.evolves_to[0]
        }
        setEvolutionLevel(newLevel)
      } catch (error) {
        console.error('Error fetching Evolution:', error)
      }
    }

    const fetchPokemon = async () => {
      try {
        const information = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const informationData = await information.json()
        const speciesData = await species.json()
        setInformation(informationData)
        await fetchEvolution(speciesData.evolution_chain.url)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemon()
  }, [id])

  return (
    <div className="flex flex-col items-center mb-8">
      {information ? (
        <>
          <figure className="mb-4">
            <img className="mb-4 w-full aspect-square max-w-[400px]" src={imageUrl} alt={information.name} />
            <figcaption className="flex flex-col items-center">
              <span className="text-gray-500">No.{id}</span>
              <h2 className="text-2xl font-bold">{information.name}</h2>
            </figcaption>
          </figure>
          <dl className="flex justify-between mb-4 px-5 py-4 border border-gray-300 rounded w-full max-w-[400px]">
            <div className="flex items-start justify-start gap-2">
              <dt className="text-gray-500">타입</dt>
              <dd>
                {information?.types?.map(({ slot, type }: typeOfInfoType) => {
                  return <span key={slot}>{type.name}</span>
                })}
              </dd>
            </div>
            <div className="flex items-start justify-start gap-2">
              <dt className="text-gray-500">키</dt>
              <dd>{information.height}</dd>
            </div>
            <div className="flex items-start justify-start gap-2">
              <dt className="text-gray-500">몸무게</dt>
              <dd>{information.weight}</dd>
            </div>
          </dl>
          <ul className="flex mb-4">
            {evolutionLevel.map(({ name, id }, idx) => {
              return (
                <li
                  key={id}
                  className={idx < evolutionLevel.length - 1 ? "after:content-['▶️'] after:mx-4 flex items-center" : ''}
                >
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
            })}
          </ul>
        </>
      ) : null}

      <Link to="/">
        <Button>목록으로</Button>
      </Link>
    </div>
  )
}

export default Pokemon
