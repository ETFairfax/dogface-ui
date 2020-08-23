import React from 'react'
import classNames from 'classnames'
import { IButton } from './interface'

const Button: React.FC<IButton> = ({ children, disabled, type, ...rest }) => {
    const classes = classNames({
        'whitespace-no-wrap bg-blue-500 text-white font-bold py-2 px-4 rounded': true,
        'opacity-50 cursor-not-allowed': disabled,
        'hover:bg-blue-700': !disabled
    })
    return (
        <button
            data-test='button-comp'
            disabled={disabled}
            className={classes}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    type: 'submit',
    onClick: undefined
}

export default Button
