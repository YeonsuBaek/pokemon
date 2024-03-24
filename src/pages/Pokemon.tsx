import { Button } from '@yeonsubaek/yeonsui'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EvolutionsList from '../components/feature/Pokemon/EvolutionsList'
import PokemonCard from '../components/block/PokemonCard'
import MetaTag from '../components/block/MetaTag'

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
  koreanName: string
  types: typeOfInfoType[]
  weight: number
}

const Pokemon = () => {
  const { id } = useParams()
  const [information, setInformation] = useState<informationType>()
  const [evolutionUrl, setEvolutionUrl] = useState('')

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const information = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const informationData = await information.json()
        const speciesData = await species.json()
        const koreanName = speciesData.names?.find(
          ({ language }: { language: { name: string } }) => language.name === 'ko'
        ).name

        setInformation({ ...informationData, koreanName })
        setEvolutionUrl(speciesData.evolution_chain.url)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemon()
  }, [id])

  return (
    <>
      <MetaTag
        title={`포켓몬 도감 사이트 ${information?.name && ` | ${information.name}`}`}
        description={`${information?.name ? information.name : '포켓몬'}에 대해 알아봅시다.`}
        keywords={`Pokemons, 포켓몬, 포켓몬 도감, ${information?.name}. ${information?.koreanName}`}
      />
      <div className="flex flex-col items-center mb-8">
        {information ? (
          <>
            <PokemonCard name={information.name} koreanName={information.koreanName} id={Number(id)} />
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
            <EvolutionsList url={evolutionUrl} />
          </>
        ) : null}

        <Link to="/">
          <Button>목록으로</Button>
        </Link>
      </div>
    </>
  )
}

export default Pokemon
