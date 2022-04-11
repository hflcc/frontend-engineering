import pkg from 'webpack-sources';
const { ConcatSource } = pkg;


class FooterPlugin {
	constructor(options) {
		this.options = options || {};
	}

	apply(compiler) {
		compiler.hooks.compilation.tap('FooterPlugin', complition => {
			complition.hooks.processAssets.tap('FooterPlugin', () => {
				const chunks = complition.chunks;
				for (const chunk of chunks) {
					for (const chunkElement of chunk.files) {
						const content = `/* ${this.options.content} */`;
						complition.updateAsset(chunkElement, old => new ConcatSource(old, '\n\n', content, '\n'));
					}
				}
			});
		});
	}
}

export default FooterPlugin;
