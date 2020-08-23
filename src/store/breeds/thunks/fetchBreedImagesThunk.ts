import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/index'
import { loadBreedImages } from './../reducer'

export const fetchBreedImagesThunk = (
    group: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
    dispatch
) => {
    try {
        const fetchResponse = await fetch(
            `https://dog.ceo/api/breed/${group}/images/random/3`
        )

        const data = await fetchResponse.json()

        dispatch(loadBreedImages({ group: group, imageurls: data.message }))
    } catch (e) {
        // TODO: dispatch(loadBreedGgroupsError(e))
    }
}
