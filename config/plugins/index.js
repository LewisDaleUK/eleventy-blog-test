const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownPlugin = require('./markdown');
const rss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const imagePlugin = require('./image');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(rss);
	eleventyConfig.addPlugin(markdownPlugin);
	eleventyConfig.addPlugin(imagePlugin);
	eleventyConfig.addPlugin(EleventyRenderPlugin);
}