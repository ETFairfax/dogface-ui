import React from 'react'
import classNames from 'classnames'
import { IButton } from './interface'

const Button: React.FC<IButton> = ({ children, disabled, type, ...rest }) => {
    const classes = classNames({
        'bg-brown text-white py-2 px-4 whitespace-no-wrap border': true,
        'opacity-50 cursor-not-allowed': disabled,
        'hover:bg-white hover:text-brown hover:border-brown hover:border': !disabled
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
