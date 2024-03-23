import { create } from 'zustand'

export type PokemonType = {
  id: number
  name: string
}

export interface PokemonStore {
  pokemons: PokemonType[]
  setPokemons: (newPokemons: PokemonType[]) => void
  setFilteredPokemon: (newPokemon: PokemonType) => void
  setPokemonsReset: () => void
}

const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  setPokemons: (newPokemons: PokemonType[]) =>
    set((prev) => ({
      pokemons: [...prev.pokemons, ...newPokemons],
    })),
  setFilteredPokemon: (newPokemon: PokemonType) => set({ pokemons: [newPokemon] }),
  setPokemonsReset: () => set({ pokemons: [] }),
}))

export default usePokemonStore
