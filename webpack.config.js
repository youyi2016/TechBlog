

  module.exports = {
    entry: {
			app: './docs',
			print: './docs',
    },
    devtool: 'inline-source-map',
		devServer: {
			contentBase: './docs/.vuepress/dist',
			hot: true
		},
    plugins: [
      
    ],
    output: {
     
    }
  };