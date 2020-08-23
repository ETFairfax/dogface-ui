import { combineReducers } from '@reduxjs/toolkit'
import breedsReducer from './breeds/reducer'

export const RootReducer = combineReducers({
    breeds: breedsReducer
})

export type RootState = ReturnType<typeof RootReducer>
