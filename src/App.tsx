import React, { useEffect } from 'react'
import { registerLibrary } from './fonts'
import BreedList from 'features/BreedList'
import { fetchBreedsThunk } from 'store/breeds/thunks'
import { useDispatch } from 'react-redux'
import './styles/index.css'

registerLibrary()

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBreedsThunk())
    })

    return (
        <main>
            <BreedList />
        </main>
    )
}

export default App
