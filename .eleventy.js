module.exports = function(eleventyConfig) { 
    // Configure passthrough copies, file ops
    eleventyConfig.addPlugin(require('./config/files'));
    // Setup plugins
    eleventyConfig.addPlugin(require('./config/plugins'));
    // Custom filters and shortcodes
    eleventyConfig.addPlugin(require('./config/filters'));
    // Custom collections
    eleventyConfig.addPlugin(require('./config/collections'));

    return {
        passthroughFileCopy: true,
        dataTemplateEngine: false,
        markdownTemplateEngine: "njk",

        htmlTemplateEngine: "njk",
            dir: {
                input: "src",
                includes: "_includes",
                data: "_data",
                output: "_site"
        }
    };
};