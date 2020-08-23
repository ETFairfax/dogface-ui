import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBreedsState, IBreed } from './types'

const breeds = createSlice({
    name: 'breeds',
    initialState: {
        breeds: []
    } as IBreedsState,
    reducers: {
        addBreed: (state, action: PayloadAction<IBreed>) => {
            state.breeds.push(action.payload)
        }
    }
})

export const { addBreed } = breeds.actions
export default breeds.reducer
