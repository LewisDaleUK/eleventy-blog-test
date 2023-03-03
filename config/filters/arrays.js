module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('take', (list, n) => list.slice(0, n));
}