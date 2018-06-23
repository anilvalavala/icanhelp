const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test' });
}
else if(process.env.NODE_ENV === 'development')
{
    require('dotenv').config({ 'path': '.env.development'});
}

//module.exports exporting a function
//This helps us to pass additional params to function that helps us to
//identify current environment
module.exports = (env) => {
    const isProduction = env === 'production';
    //ExtractTextPlugin constructor takes name of output file that need to be created as argument
    // const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map',
        path: path.join(__dirname, 'public', 'dist'),
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
    // plugins: [ CSSExtract ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.FIREBASE_AP_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
        })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: "/dist/"
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