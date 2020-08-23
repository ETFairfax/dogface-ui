import { combineReducers } from '@reduxjs/toolkit'
import breedGroupsReducer from './breeds/reducer'

export const RootReducer = combineReducers({
    breedGroups: breedGroupsReducer
})

export type RootState = ReturnType<typeof RootReducer>
