import { Link } from 'react-router-dom'
import PokemonCard from '../../block/PokemonCard'

interface EvolutionItemProps {
  name: string
  id: number
  hasNext: boolean
}

const EvolutionItem = ({ name, id, hasNext }: EvolutionItemProps) => {
  return (
    <li key={id} className={hasNext ? "after:content-['▶️'] after:mx-4 flex-center" : 'flex-center'}>
      <Link to={`/pokemon/${id}`} className="hover:bg-gray-100">
        <PokemonCard name={name} id={id} size="small" />
      </Link>
    </li>
  )
}

export default EvolutionItem
