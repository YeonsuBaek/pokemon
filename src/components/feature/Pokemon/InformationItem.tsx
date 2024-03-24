import { ReactNode } from 'react'

interface InformationItemProps {
  name: string
  data: number | ReactNode
}

const InformationItem = ({ name, data }: InformationItemProps) => {
  return (
    <div className="flex items-start justify-start gap-2">
      <dt className="text-gray-500">{name}</dt>
      <dd>{data}</dd>
    </div>
  )
}

export default InformationItem
