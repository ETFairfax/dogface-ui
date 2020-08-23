import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBreedsState, IBreedGroup, IFetchImageResult } from './types'

const breedGroups = createSlice({
    name: 'breedGroups',
    initialState: {
        breedGroups: []
    } as IBreedsState,
    reducers: {
        loadBreedGroups: (state, action: PayloadAction<IBreedGroup[]>) => {
            state.breedGroups = action.payload
        },
        loadBreedImages: (state, action: PayloadAction<IFetchImageResult>) => {
            state.breedGroups = state.breedGroups.map((g) => {
                if (g.name === action.payload.group)
                    return { ...g, images: action.payload.imageurls }

                return g
            })
        }
    }
})

export const { loadBreedGroups, loadBreedImages } = breedGroups.actions
export default breedGroups.reducer
