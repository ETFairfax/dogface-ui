import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/index'
import { loadBreedGroups } from './../reducer'

export const fetchBreedsThunk = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => async (dispatch) => {
    try {
        const fetchResponse = await fetch(`https://dog.ceo/api/breeds/list/all`)

        const data = await fetchResponse.json()

        const result = data.message

        // Data comes down as a object - converted to an array to simplify usage later
        const parsed = Object.keys(result).map((key) => ({
            name: key,
            breeds: result[key],
            images: []
        }))

        dispatch(loadBreedGroups(parsed))
    } catch (e) {
        // TODO: dispatch(loadBreedGgroupsError(e))
    }
}
