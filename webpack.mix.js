const { mix } = require('laravel-mix');
// const svgSprite = require('laravel-mix-svg-sprite');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// mix.webpackConfig({
//     plugins: [
//         new CopyWebpackPlugin([{
//             from: 'source/images',
//             to: './public/images', // Laravel mix will place this in 'public/img'
//         }]),
//         new ImageminPlugin({
//             test: /\.(jpe?g|png|gif|svg)$/i,
//             plugins: [
//                 imageminMozjpeg({
//                     quality: 80,
//                 })
//             ]
//         })
//     ]
// });

mix.setPublicPath(path.resolve('./'));
// mix.js('source/scripts/carbon_header_scripts.js', './public/scripts/')
//     .js('source/scripts/carbon_scripts.js', './public/scripts/')
//     .sass('source/styles/carbon_styles.scss', './public/styles/')
//     .sass('source/styles/carbon_admin_styles.scss', './public/styles/')
//     .svgSprite('source/images/svg-sprite', 'public/images/svg-sprite.svg')
//     .sourceMaps()
//     .version()
//     .browserSync();

mix.js('scripts/app.js', './js/')
    .sass('sass/website/website.scss', './css/website/')
    .sourceMaps()
    .version()
    .browserSync();
