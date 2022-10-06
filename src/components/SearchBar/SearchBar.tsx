import { debounce } from '../../common/util'
import { TextField } from '@mui/material'

interface SearchProps {
  searchHandler: (value: string) => void
}
export const SearchBar = ({ searchHandler }: SearchProps) => {
  const useDebounce = debounce((e) => searchHandler(e.target.value), 300)
  return (
    <div className='search'>
      <TextField
        fullWidth={true}
        label='Search'
        variant='filled'
        onChange={(e) => useDebounce(e)}
      />
    </div>
  )
}
