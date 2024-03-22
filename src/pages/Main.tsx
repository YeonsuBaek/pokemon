import React, { useState } from 'react'
import PokemonList from '../components/feature/Main/PokemonList'
import Search from '../components/block/Search'

const Main = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div>
      <Search onChangeSearch={setSearchValue} />
      <PokemonList searchValue={searchValue} />
    </div>
  )
}

export default Main
