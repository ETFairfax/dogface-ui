import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBreedsState, IBreedGroup } from './types'

const breedGroups = createSlice({
    name: 'breedGroups',
    initialState: {
        breedGroups: []
    } as IBreedsState,
    reducers: {
        loadBreedGroups: (state, action: PayloadAction<IBreedGroup[]>) => {
            state.breedGroups = action.payload
        }
    }
})

export const { loadBreedGroups } = breedGroups.actions
export default breedGroups.reducer
