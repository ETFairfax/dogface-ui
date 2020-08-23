module.exports = {
    plugins: [
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.ts', './src/**/*.tsx', './public/index.html'],
            defaultExtractor: (content) => content.match(/[A-Za-z-0-9-_:/]+/g)
        })
    ]
}
