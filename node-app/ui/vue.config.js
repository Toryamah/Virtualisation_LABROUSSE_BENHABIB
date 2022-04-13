/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/


// /**
//  * @type {import('@vue/cli-service').ProjectOptions}
//  */
// console.log("customization");
// console.log(process.env.VUE_APP_PUBLICPATH);
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//         ? '/app/'
//         : '/'
// }
module.exports = {
    pages: {
        'star-wars-name': {
            entry: './src/pages/random_name/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'star-wars-name' ]
        },
        'languages': {
            entry: './src/pages/random_language/main.js',
            template: 'public/index.html',
            title: 'Languages',
            chunks: [ 'chunk-vendors', 'chunk-common', 'languages' ]
        },
        'users': {
            entry: './src/pages/users/main.js',
            template: 'public/index.html',
            title: 'Users',
            chunks: [ 'chunk-vendors', 'chunk-common', 'users' ]
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/app/'
        : '/'
}