export interface IButton {
    disabled?: boolean
    type?: 'submit' | 'button'
    target?: any
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
