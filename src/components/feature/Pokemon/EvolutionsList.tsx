import React, { useEffect, useState } from 'react'
import EvolutionItem from './EvolutionItem'

type evolutionType = {
  name: string
  id: number
}

interface EvolutionListProps {
  url: string
}

const EvolutionsList = ({ url }: EvolutionListProps) => {
  const [evolutions, setEvolutions] = useState<evolutionType[]>([])

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
}

export default EvolutionsList
