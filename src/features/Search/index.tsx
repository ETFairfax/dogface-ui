import React, { useState } from 'react'
import BreedList from './BreedList'

const Search: React.FC = () => {
    const [value, setValue] = useState('')

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input
                className='border border-brown border py-1 px-3 mb-3 text-grey'
                placeholder='start typing to filter breeds...'
                value={value}
                onChange={handleInputChange}
            />
            <BreedList filter={value} />
        </>
    )
}

export default Search
