import React from 'react'
import { typeOfInfoType } from '../../../pages/Pokemon'
import InformationItem from './InformationItem'

interface InformationListProps {
  types: typeOfInfoType[]
  height: number
  weight: number
}

const InformationList = ({ types, height, weight }: InformationListProps) => {
  const dataList = [
    {
      name: '타입',
      data: renderTypeList(types),
    },
    {
      name: '키',
      data: height,
    },
    {
      name: '몸무게',
      data: weight,
    },
  ]
  return (
    <dl className="flex justify-between mb-4 px-5 py-4 border border-gray-300 rounded w-full max-w-[400px]">
      {dataList.map(({ name, data }) => (
        <InformationItem name={name} data={data} key={name} />
      ))}
    </dl>
  )
}

const renderTypeList = (types: typeOfInfoType[]) => {
  return types.map(({ slot, type }) => <span key={slot}>{type.name}</span>)
}

export default InformationList
