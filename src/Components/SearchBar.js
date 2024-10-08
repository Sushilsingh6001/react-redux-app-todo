import React from 'react'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/todoSlice'

const SearchBar = () => {

    const dispatch = useDispatch()
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    }
    return (
        <div>
            <TextField
                label='Search Todo'
                variant='outlined'
                onChange={handleSearch}
                fullWidth
                margin='normal'
            />
        </div>
    )
}

export default SearchBar