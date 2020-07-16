const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
			{
				test: /\.ttf$/,
				use: [
					{
						loader: 'ttf-loader',
						options: {
							name: './fonts/[hash].[ext]',
						}
					},
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/"
    }
};