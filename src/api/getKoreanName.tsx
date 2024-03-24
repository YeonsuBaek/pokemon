const getKoreanName = async (id: number) => {
  const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  const speciesData = await species.json()
  const koreanName = speciesData.names?.find(
    ({ language }: { language: { name: string } }) => language.name === 'ko'
  ).name

  return koreanName
}

export default getKoreanName
