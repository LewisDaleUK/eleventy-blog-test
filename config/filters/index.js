const dateFilters = require('./dates');
const arrayFilters = require('./arrays');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(dateFilters);
    eleventyConfig.addPlugin(arrayFilters);

    eleventyConfig.addFilter('keys', obj => Object.keys(obj))
}