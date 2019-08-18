var nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './entrypoint',
	output: {
		path: __dirname,
		filename: 'sealedbox.node.js',
		libraryTarget: 'umd',
	},
	target: 'node',
	mode: 'production',
	externals: [nodeExternals()],
};
