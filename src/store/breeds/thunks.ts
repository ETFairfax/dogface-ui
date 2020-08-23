import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/index'
import { IBreed } from './types'
import { addBreed } from './reducer'

// TODO: Put each thunk in its own directory.

export const addTaskThunk = (
    breed: IBreed
): ThunkAction<void, RootState, unknown, Action<string>> => async (
    dispatch
) => {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(breed)
    }
    try {
        // TODO: Call actual API
        const fetchResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts`,
            options
        )

        const data = await fetchResponse.json()

        dispatch(addBreed(breed))

        return data
    } catch (e) {
        return e // TODO: dispatch(addTaskError(e))
    }
}
