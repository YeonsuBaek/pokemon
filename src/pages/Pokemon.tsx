import { Button } from '@yeonsubaek/yeonsui'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EvolutionsList from '../components/feature/Pokemon/EvolutionsList'
import PokemonCard from '../components/block/PokemonCard'
import MetaTag from '../components/block/MetaTag'
import InformationList from '../components/feature/Pokemon/InformationList'
import getKoreanName from '../api/getKoreanName'

export type typeOfInfoType = {
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
        const koreanName = await getKoreanName(Number(id))
        setInformation({ ...informationData, name: koreanName })
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
        keywords={`Pokemons, 포켓몬, 포켓몬 도감, ${information?.name}`}
      />
      <div className="flex flex-col items-center mb-8">
        {information ? (
          <>
            <PokemonCard name={information.name} id={Number(id)} />
            <InformationList types={information.types} weight={information.weight} height={information.height} />
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
