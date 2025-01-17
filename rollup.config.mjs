import sass from 'rollup-plugin-sass';

export default {
	input: './src/index.js',
	output: [
		{
			file: './build/js/bundle.js',
			format: 'esm',
		},
	],
	plugins: [
		sass({
			output: './build/css/cmdr-global-styles.css',
		}),
	],
};
