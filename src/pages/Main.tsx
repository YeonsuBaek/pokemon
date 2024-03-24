import React, { useState } from 'react'
import PokemonList from '../components/feature/Main/PokemonList'
import Search from '../components/feature/Main/Search'
import { Helmet } from 'react-helmet-async'

const Main = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Helmet>
        <title>포켓몬 도감 사이트</title>
        <meta name="description" content="포켓몬 종류를 한 눈에 알아봅시다." />
        <meta name="keywords" content="Pokemons, 포켓몬, 포켓몬 도감" />
      </Helmet>
      <Search onChangeSearch={setSearchValue} />
      <PokemonList searchValue={searchValue} />
    </>
  )
}

export default Main
