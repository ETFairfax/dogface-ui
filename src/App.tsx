import React, { useEffect } from 'react'
import { registerLibrary } from './fonts'
import BreedList from 'features/BreedList'
import './styles/index.css'

registerLibrary()

const App = () => {
    useEffect(() => {})

    return (
        <main>
            <BreedList />
        </main>
    )
}

export default App
