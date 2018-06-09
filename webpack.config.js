const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

//module.exports exporting a function
//This helps us to pass additional params to function that helps us to
//identify current environment

module.exports = (env) => {
    const isProduction = env === 'production';
    //ExtractTextPlugin constructor takes name of output file that need to be created as argument
    //const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'dist')
    },
    module: {
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                // use: CSSExtract.extract({
                //     use: [
                //         {
                //         loader: 'css-loader',
                //          options: {
                //              sourceMap: true
                //         }
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options:{
                //              sourceMap: true
                //         }
                //     }
                //     ],
                // }),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.s?css/
            }
        ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
}
};

//module.exports is exporting an object
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.join(__dirname, 'public')
//     },
//     module: {
//         rules:[
//             {
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             },
//             {
//                 use: [ 
//                       'style-loader',
//                       'css-loader',
//                       'sass-loader'
//                      ],
//                 test: /\.s?css/
//             }
//         ]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         historyApiFallback: true
//     }
// }