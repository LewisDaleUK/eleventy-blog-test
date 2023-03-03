module.exports = function(eleventyConfig) {
	if (process.env.NODE_ENV !== "development") {
		eleventyConfig.ignores.add("src/posts/drafts/*");
	}

	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setFrontMatterParsingOptions({ excerpt: true, });
}