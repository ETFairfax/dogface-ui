// ? Only test utilities in here please 👍

import React from 'react'
import { mount, ShallowWrapper, ReactWrapper } from 'enzyme'
import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from '../store/reducers'
import { middlewares } from '../store'
import { Provider } from 'react-redux'

export const findByTestAttribute = (
    component: ShallowWrapper,
    value: string
) => {
    const wrapper = component.find(`[data-test='${value}']`)
    return wrapper
}

export const findByTestAttributeFromMounted = (
    component: ReactWrapper,
    value: string
) => {
    const wrapper = component.find(`[data-test='${value}']`)
    return wrapper
}

export const createMockStore = (preloadedState = {}) => {
    const store = configureStore({
        reducer: RootReducer,
        middleware: middlewares,
        preloadedState: preloadedState
    })
    return store
}

export const mountConnectedComponent = (
    componentUnderTest: React.ReactNode
) => {
    const store = createMockStore()

    const component = mount(
        <Provider store={store}>{componentUnderTest}</Provider>
    )

    return component
}
