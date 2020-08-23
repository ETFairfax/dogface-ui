import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { RootReducer } from './reducers'

export const middlewares = new MiddlewareArray().concat(logger, thunk)

export const store = configureStore({
    reducer: RootReducer,
    middleware: middlewares
})

export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
