import { memo, useEffect, useState } from 'react'
import EvolutionItem from './EvolutionItem'
import { getIdFromUrl } from '../../../utils/common'
import getKoreanName from '../../../api/getKoreanName'

type evolutionType = {
  name: string
  id: number
}

interface EvolutionListProps {
  url: string
}

const EvolutionsList = memo(({ url }: EvolutionListProps) => {
  const [evolutions, setEvolutions] = useState<evolutionType[]>([])

  const fetchEvolution = async (url: string) => {
    try {
      const evolution = await fetch(url)
      const evolutionData = await evolution.json()
      const newLevel = []
      let elem = evolutionData.chain
      while (elem) {
        if (elem.species?.name && elem.species?.url) {
          const { url: pokemonUrl } = elem.species
          const id = getIdFromUrl(pokemonUrl)
          const name = await getKoreanName(id)
          newLevel.push({ name, id })
        }
        elem = elem.evolves_to[0]
      }
      setEvolutions(newLevel)
    } catch (error) {
      console.error('Error fetching Evolution:', error)
    }
  }

  useEffect(() => {
    fetchEvolution(url)
  }, [])

  return (
    <ul className="flex mb-4">
      {evolutions.map(({ name, id }, idx) => (
        <EvolutionItem key={id} name={name} id={id} hasNext={idx < evolutions.length - 1} />
      ))}
    </ul>
  )
})

export default EvolutionsList
