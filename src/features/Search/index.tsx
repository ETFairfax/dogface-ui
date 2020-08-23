import React, { useState } from 'react'

const Search: React.FC = () => {
    const [value, setValue] = useState('')

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            {value}
            <input value={value} onChange={handleInputChange} />
        </>
    )
}

export default Search
