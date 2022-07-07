const { defaultTheme } = require('vuepress')

export default defaultTheme({
    repo: 'https://github.com/felixranesberger/coding-tips',
    navbar: [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Guide',
            children: [
                {
                    text: 'Prefer object destructuring',
                    link: '/guide/prefer-object-destructuring.md',
                },
                {
                    text: 'Cleaner function arguments',
                    link: '/guide/cleaner-function-arguments.md',
                },
            ],
        },
    ],
});
