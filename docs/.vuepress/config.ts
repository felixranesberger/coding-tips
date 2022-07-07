import { defineUserConfig } from 'vuepress'
import theme from './theme/index';

export default defineUserConfig({
    lang: 'en-US',
    title: 'Coding Tips',
    description: 'Just playing around',
    theme: theme,
})
