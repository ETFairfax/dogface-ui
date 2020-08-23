import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBreedsState, IBreedGroup, IFetchImageResult } from './types'

const breedGroups = createSlice({
    name: 'breedGroups',
    initialState: {
        groups: []
    } as IBreedsState,
    reducers: {
        loadBreedGroups: (state, action: PayloadAction<IBreedGroup[]>) => {
            state.groups = action.payload
        },
        loadBreedImages: (state, action: PayloadAction<IFetchImageResult>) => {
            state.groups = state.groups.map((g) => {
                if (g.name === action.payload.group)
                    return { ...g, images: action.payload.imageurls }

                return g
            })
        }
    }
})

export const { loadBreedGroups, loadBreedImages } = breedGroups.actions
export default breedGroups.reducer
