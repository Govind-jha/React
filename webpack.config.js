var path = require('path');

var config = {
   entry: './main.js',
	
   output: {
      path: path.join( __dirname, './dist/'),
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8989
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;