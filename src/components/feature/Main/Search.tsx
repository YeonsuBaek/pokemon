import { TextField } from '@yeonsubaek/yeonsui'
import { ChangeEvent, useEffect, useState } from 'react'
import useDebounce from '../../../hooks/useDebounce'

interface SearchProps {
  onChangeSearch: (value: string) => void
}

const Search = ({ onChangeSearch }: SearchProps) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 300)

  useEffect(() => onChangeSearch(debouncedValue), [debouncedValue])

  return (
    <TextField
      icon="Filter"
      placeholder="번호를 입력해 포켓몬을 찾아보세요."
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  )
}

export default Search
