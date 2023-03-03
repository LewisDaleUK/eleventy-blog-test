const path = require("path");

const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItClass = require('@toycode/markdown-it-class');
const markdownItLinkAttributes = require('markdown-it-link-attributes');
const markdownItEmoji = require('markdown-it-emoji');
const markdownItFootnote = require('markdown-it-footnote');
const markdownitMark = require('markdown-it-mark');
const markdownitAbbr = require('markdown-it-abbr');
const markdownItEleventyImg = require('markdown-it-eleventy-img');
const icons = require('./icons.json');
const { slugifyString } = require('../utils');

const markdownLib = markdownIt({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true
  })
	.disable('code')
	.use(markdownItPrism, {
	  defaultLanguage: 'plaintext'
	})
	.use(markdownItAnchor, {
	  slugify: slugifyString,
	  tabIndex: false,
	  permalink: markdownItAnchor.permalink.headerLink({
		class: 'heading-anchor'
	  })
	})
	.use(markdownItClass, {
	  ol: 'list',
	  ul: 'list'
	})
	.use(markdownItLinkAttributes, [
	  {
		// match external links
		matcher(href) {
		  return href.match(/^https?:\/\//);
		},
		attrs: {
		  target: '_blank',
		  rel: 'noreferrer noopener'
		}
	  }
	])
	.use(markdownItEmoji, { defs: icons })
	.use(markdownItFootnote)
	.use(markdownitMark)
	.use(markdownitAbbr)
	.use(markdownItEleventyImg, {
		imgOptions: {
			widths: [300, 600, 1000, 1440],
			urlPath: "/img/",
			outputDir: path.join("_site", "img"),
			formats: ["avif", "webp", "jpeg"]
		},
		globalAttributes: {
			sizes: `(max-width: 300px) 300px,
			(max-width: 600px) 600px,
			(max-width: 1000px) 1000px,
			(max-width: 1440px) 1440px,
			100%`
		}
	});

	markdownLib.renderer.rules.emoji = function(token, idx) {
		return `<span class="fa-li"><i class="fa-solid fa-${token[idx].markup}"></i></span>`;
	};
  
  module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter('md', content => content ? markdownLib.render(content) : "");
	eleventyConfig.setLibrary('md', markdownLib);
  };