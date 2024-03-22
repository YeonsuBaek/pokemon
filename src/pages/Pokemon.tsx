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

interface informationType {
  height: number
  name: string
  types: typeOfInfoType[]
  weight: number
}

const Pokemon = () => {
  const { id } = useParams()
  const [information, setInformation] = useState<informationType>()

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const information = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const informationData = await information.json()
        setInformation(informationData)
        console.log(informationData)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemon()
  }, [])

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
            <li className="after:content-['▶️'] after:mx-4 flex items-center">
              <figure className="flex flex-col items-center">
                <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
                <figcaption className="flex flex-col items-center">
                  <span className="text-gray-500">No.1</span>
                  <h2>Name</h2>
                </figcaption>
              </figure>
            </li>
            <li className="after:content-['▶️'] after:mx-4 flex items-center">
              <figure className="flex flex-col items-center">
                <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
                <figcaption className="flex flex-col items-center">
                  <span className="text-gray-500">No.1</span>
                  <h2>Name</h2>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="flex flex-col items-center">
                <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
                <figcaption className="flex flex-col items-center">
                  <span className="text-gray-500">No.1</span>
                  <h2>Name</h2>
                </figcaption>
              </figure>
            </li>
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
