import React from 'react'
import { ReactWrapper } from 'enzyme'
import { findByTestAttributeFromMounted, mountConnectedComponent } from 'test'

import App from './App'

describe('App Component', () => {
    let component: ReactWrapper

    beforeEach(() => {
        component = mountConnectedComponent(<App />)
    })

    it('Theme is set from store', () => {
        const target = findByTestAttributeFromMounted(component, 'theme')
        const theme = target.text()
        expect(theme).toEqual('Light')
    })
})
