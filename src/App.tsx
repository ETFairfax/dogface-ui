import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { registerLibrary } from './fonts'
import { fetchBreedsThunk } from 'store/breeds/thunks'
import { useDispatch } from 'react-redux'
import BreedList from 'features/BreedList'
import Detail from 'features/Detail'
import './styles/index.css'

registerLibrary()

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBreedsThunk())
    }, [])

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <BreedList />
                </Route>
                <Route path='/:group'>
                    <Detail />
                </Route>
            </Switch>
        </main>
    )
}

export default App
