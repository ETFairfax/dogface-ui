import React, { useState } from 'react'

const SearchForm: React.FC = () => {
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

export default SearchForm
