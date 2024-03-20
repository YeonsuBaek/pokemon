import React from 'react'
import PokemonList from '../components/feature/Main/PokemonList'
import { TextField } from '@yeonsubaek/yeonsui'

const Main = () => {
  return (
    <div>
      <TextField icon="Filter" placeholder="번호를 입력해 포켓몬을 찾아보세요." />
      <PokemonList />
    </div>
  )
}

export default Main
