import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from 'store/index'
import { loadBreedImages } from './../reducer'

export const fetchBreedImagesThunk = (
    group: string,
    forceUpdate: boolean
): ThunkAction<void, RootState, unknown, Action<string>> => async (
    dispatch,
    getState
) => {
    try {
        // Check the current state to see if the images have been loaded already...
        const { breedGroups } = getState()
        const selected = breedGroups.groups.find((x) => {
            return x.name === group
        })

        // If not, then call the api
        if (forceUpdate === true || selected?.images?.length === 0) {
            const fetchResponse = await fetch(
                `https://dog.ceo/api/breed/${group}/images/random/3`
            )

            const data = await fetchResponse.json()

            dispatch(loadBreedImages({ group: group, imageurls: data.message }))
        }

        return
    } catch (e) {
        // TODO: dispatch(loadBreedGgroupsError(e))
    }
}
