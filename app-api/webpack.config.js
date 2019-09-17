const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const terserJSPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development'

/* MODE *******************************************/

const mode = isDev? 'development': 'production'

/* ENTRY ******************************************/

let entry = {
    ssr: './src/pl/index.js'
}

/* TARGET *****************************************/

const target = 'node'

/* WATCH OPTIONS **********************************/

const watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: ['node_modules']
}

/* STATS ******************************************/

const stats = {
    colors: true
}

/* EXTERNALS **************************************/

let externals = []

externals.push(nodeExternals())

/* DEVTOOL ****************************************/

const devtool = 'source-map'

/* RESOLVE ****************************************/

const resolve = {
    extensions: ['.js', '.jsx']
}

/* MODULE *****************************************/

const modules = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }
    ]
}

/* PLUGINS ****************************************/

let plugins = []

if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
}

/* OPTIMIZATION ***********************************/
let optimization = {}

if(!isDev){

    optimization.minimizer = [
        new terserJSPlugin({})
    ]

}

/* NODE *******************************************/

const node = {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
}

/* OUTPUT ****************************************/

const output = {
    publicPath: '/',
    path: path.resolve(__dirname, 'builds'),
    filename: 'api.js',
    libraryTarget: 'commonjs2'
}

/* EXPORT */

module.exports = {
    mode: mode,
    entry: entry,
    target: target,
    watchOptions: watchOptions,
    stats: stats,
    externals: externals,
    devtool: devtool,
    resolve: resolve,
    module: modules,
    plugins: plugins,
    optimization: optimization,
    node: node,
    output: output
}