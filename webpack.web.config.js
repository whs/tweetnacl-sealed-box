module.exports = {
	entry: './entrypoint',
	output: {
		path: __dirname,
		filename: 'sealedbox.web.js',
		library: 'sealedBox',
		libraryTarget: 'umd',
	},
	externals: function(context, request, callback){
		if(request == 'tweetnacl'){
			return callback(null, 'nacl');
		}
		if(context.indexOf('node_modules/blakejs') !== -1 && request == './util'){
			return callback(null, 'Object');
		}
		callback();
	},
	node: {
		Buffer: false,
	},
	mode: 'production',
};
