const { colors } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
        fontSize: {
            xl: '30px',
            lg: '20px',
            base: '16px'
        },
        colors: {
            brown: '#773f0e',
            black: '#000000',
            white: '#FFFFFF',
            grey: '#999999'
        },
        extend: {}
    },
    variants: {},
    plugins: [
        plugin(function ({ addBase, config }) {
            addBase({
                h1: { fontSize: config('theme.fontSize.xl') },
                h2: { fontSize: config('theme.fontSize.lg') }
            })
        })
    ]
}
