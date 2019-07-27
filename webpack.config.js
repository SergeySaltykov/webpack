const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const paths = {
    build: path.resolve(__dirname, './www/build'),
    src: path.resolve(__dirname, './src'),
    www: path.resolve(__dirname, './www'),
};
const defaultPort = 8000;
const port = process.env.PORT || defaultPort;
const isProd = process.env.NODE_ENV === 'production';
const stats = {
    colors: true,
    errorDetails: true,
};
const cleanOptions = {
    dry: false,
    verbose: true,
};

// style loaders
// const cssLoader = {
//     loader: 'css-loader',
// options: {
// попробовать оптимизировать css.
// sourceMap: true,
// modules: true,
// ...(
//     isProd ? {
//         getLocalIdent: () => {},
//
//     } : {
//         localIdentName: '[folder]_[name]'
//     }
// ),
// }
// };
// const lessLoader = {
//     loader: 'less-loader',
// options: {
//     sourceMap: true,
// }
// };

// plugins
const plugins = [
    new HtmlWebpackPlugin({
        alwaysWriteToDisk: true, // генерация записи на диск для локального запуска
        inject: true, // все скрипты будут грузиться после body
        hash: true, // добавляет в конце файла хеш чтобы не кешировались стили
        template: path.resolve(paths.src, './index.html'), // путь к шаблону
        filename: path.resolve(paths.www, './index.html'), // путь к файлу
        title: 'Application',
    }),
    new MiniCssExtractPlugin({ // извлекает css в отдельные файлы
        chunkFilename: 'css/[id].min.css',
        filename: 'css/[name].min.css',
    }),
    new HtmlWebpackHarddiskPlugin(), // плагин позволяет убрать пути по умолчанию
];
const styleLoaderOrPlugin = isProd ? MiniCssExtractPlugin.loader : 'style-loader'; // MiniCssExtractPlugin used only on production, for hot reload

if (isProd) {
    plugins.unshift(
        new CleanWebpackPlugin(cleanOptions),
    ); // порядок важен, сначала идет отчистка билдов
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin()); // обновление модуля без перезагрузки при изменении кода
}

/* minimization сss & js */
const minimizer = [
    new UglifyJsPlugin({
        cache: true, // кэш
        parallel: true, // использует параллельный запуск для провышени скорости сборки
        sourceMap: true, // поволяет показывать правильные пути модулей при ошибках (замедляет компиляцию)
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
            autoprefixer: false,
            discardUnused: false,
            map: {
                inline: true,
            },
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            zIndex: false,
        },
    }),
];

module.exports = {
    devServer: {
        contentBase: paths.www,
        historyApiFallback: true, // fallBack for API
        inline: true,
        port,
        stats,
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    entry: {
        app: [
            '@babel/polyfill', // кроссбраузерность
            'whatwg-fetch',
        ],
        index: './src/app/index', // определяем точку входа
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // определяем тип файлов для преобразования
                exclude: /node_modules/, // исключаем из обработки папку node_modules
                use: {
                    loader: 'babel-loader', // определяем загрузчик для транспиляции
                },
            },
            {
                test: /\.less$/,
                use: [styleLoaderOrPlugin, 'css-loader', 'postcss-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                use: [styleLoaderOrPlugin, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 100000, // default fallback: 'file-loader',
                    name: 'img/[hash:8].[ext]?[hash:4]',
                },
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'build/fonts/[hash:8].[ext]?[hash:4]',
                },
            },
        ],
    },
    optimization: {
        minimizer, // по дефолту включен в прод режиме
        splitChunks: {
            automaticNameDelimiter: '-', // разделитель чанков,
            chunks: 'all',
        },
    },
    output: { // выход билда
        chunkFilename: 'js/[name].min.js',
        filename: 'js/[name].min.js',
        path: paths.build,
        publicPath: '/build', // важный параметр, так же webpack-dev-server использует для определения где следует обслуживать выходные файлы
    },
    resolve: { // расширение модулей
        extensions: ['.js', '.jsx'], // определяем расширение файла (значения по умолчанию webpack ['.wasm', '.mjs', '.js', '.json'])
        modules: [
            paths.src,
            'node_modules',
        ],
    },
    plugins,
};
