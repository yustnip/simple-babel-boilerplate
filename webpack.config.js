module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: [ "es2015" ]
                }

            }
        ]
    }
}
