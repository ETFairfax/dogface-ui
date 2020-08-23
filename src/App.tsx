import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { registerLibrary } from './fonts'
import { fetchBreedsThunk } from 'store/breeds/thunks'
import { useSelector } from 'store/hooks/useSelector'
import { useDispatch } from 'react-redux'
import BreedList from 'features/BreedList'
import Detail from 'features/Detail'
import './styles/index.css'

registerLibrary()

const App = () => {
    const groups = useSelector(({ breedGroups }) => breedGroups.groups)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBreedsThunk())
    }, [])

    if (groups.length === 0) return <>Loading...</>

    return (
        <div className='container mx-auto'>
            <header>
                <h1>Doggy McDogface</h1>
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <BreedList />
                    </Route>
                    <Route exact path='/:group'>
                        <Detail />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App
