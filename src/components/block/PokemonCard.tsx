interface PokemonCardProps {
  id: number
  name: string
  size?: 'large' | 'small'
}

const PokemonCard = ({ id, name, size = 'large' }: PokemonCardProps) => {
  return (
    <figure className={size === 'large' ? 'mb-4' : 'flex flex-col items-center'}>
      <img
        className={size === 'large' ? 'mb-4 w-[400px] h-[400px]' : 'mb-2 w-[100px] h-[100px]'}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
      />
      <figcaption className="flex flex-col items-center">
        <span className="text-gray-500">No.{id}</span>
        <h2 className={size === 'large' ? 'text-2xl font-bold' : ''}>{name}</h2>
      </figcaption>
    </figure>
  )
}

export default PokemonCard
