const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [],
    theme: {
        fontFamily: {
            sans: [
                'Tahoma',
                'Helvetica Neue',
                'Helvetica',
                'Arial',
                'sans-serif'
            ],
            serif: ['Georgia', 'Cambria'],
            mono: ['SFMono-Regular', 'Menlo'],
            display: ['Oswald'],
            body: [
                'Tahoma',
                'Helvetica Neue',
                'Helvetica',
                'Arial',
                'sans-serif'
            ]
        },
        colors: {
            ...colors,
            brand: {
                brown: '#773f0e',
                black: '#000000',
                grey: '#999999'
            }
        },
        extend: {}
    },
    variants: {},
    plugins: []
}
