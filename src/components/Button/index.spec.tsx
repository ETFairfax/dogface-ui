import React from 'react'
import { findByTestAttribute } from 'test'
import { shallow, ShallowWrapper } from 'enzyme'
import Button from './index'
import { IButton } from './interface'

const setUp = (props: IButton) => {
    const component = shallow(<Button {...props} />)
    return component
}

describe('Button Component', () => {
    let component: ShallowWrapper

    beforeEach(() => {
        component = setUp({ children: 'Foo', type: 'submit' })
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'button-comp')
        expect(wrapper.length).toBe(1)
    })

    it('Should render children', () => {
        const wrapper = component
        expect(wrapper.children().length).toBe(1)
    })
})
