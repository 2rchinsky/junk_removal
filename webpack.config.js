const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/index.js',
        user: './src/user.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "images/[name][ext][query]",
        clean: true,
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.pug"
        }),
        new HtmlWebpackPlugin({
            template: "src/services.pug",
            filename: "services.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/feedback.pug",
            filename: "feedback.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/contacts.pug",
            filename: "contacts.html"
        }), new HtmlWebpackPlugin({
            template: "src/pricelist.pug",
            filename: "pricelist.html"
        }), new HtmlWebpackPlugin({
            template: "src/promo.pug",
            filename: "promo.html"
        }), new HtmlWebpackPlugin({
            template: "src/privacy.pug",
            filename: "privacy.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog.pug",
            filename: "blog.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/dezinfekciya.pug",
            filename: "blog/dezinfekciya.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-staroj-mebeli.pug",
            filename: "blog/vyvoz-staroj-mebeli.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-bytovoj-tekhniki.pug",
            filename: "blog/vyvoz-bytovoj-tekhniki.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-dverej-i-ram.pug",
            filename: "blog/vyvoz-dverej-i-ram.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/pereezd-iz-kvartiry-ili-ofisa.pug",
            filename: "blog/pereezd-iz-kvartiry-ili-ofisa.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-mebeli-besplatno.pug",
            filename: "blog/vyvoz-mebeli-besplatno.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-metalla.pug",
            filename: "blog/vyvoz-metalla.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-vann.pug",
            filename: "blog/vyvoz-vann.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/vyvoz-holodilnik.pug",
            filename: "blog/vyvoz-holodilnik.html"
        }),
        new HtmlWebpackPlugin({
            template: "src/blog/works.pug",
            filename: "blog/works.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
}