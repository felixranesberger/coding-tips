const { defaultTheme } = require('vuepress')

export default defaultTheme({
    repo: 'https://github.com/felixranesberger/coding-tips',
    navbar: [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Test',
            link: '/test',
        },
    ],
});
