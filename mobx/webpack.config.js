const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        entry: './src/index.tsx',

        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle_[hash].min.js',
            publicPath: '/',
        },
        node: {
            __dirname: true,
        },
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|png|jpeg|bmp|gif|svg|ico)?$/,
                    loader: 'file-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(tsx|ts)?$/,
                    loader: 'ts-loader',
                },

                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new Dotenv(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
        devServer: {
            hot: true,
            historyApiFallback: true,
        },
    };
};
