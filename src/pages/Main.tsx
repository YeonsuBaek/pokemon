import React, { useState } from 'react'
import PokemonList from '../components/feature/Main/PokemonList'
import Search from '../components/feature/Main/Search'
import MetaTag from '../components/block/MetaTag'

const Main = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <MetaTag
        title="포켓몬 도감 사이트"
        description="포켓몬 종류를 한 눈에 알아봅시다."
        keywords="Pokemons, 포켓몬, 포켓몬 도감"
      />
      <Search onChangeSearch={setSearchValue} />
      <PokemonList searchValue={searchValue} />
    </>
  )
}

export default Main
