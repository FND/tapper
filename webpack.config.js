module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: __dirname + "/dist",
		filename: "tapper.js"
	},
	externals: { // excluded from bundle
		"react": "React"
	},
	module: {
		loaders: [{
			// JSX (React)
			test: /\.jsx$/,
			loader: "jsx-loader?harmony"
		}]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	}
};
