module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('parseDate', dateString => new Date(dateString));
    
    eleventyConfig.addFilter('dateDisplay', date => new Date(date).toLocaleDateString('en-GB', {
        "dateStyle": "short"
    }));

    eleventyConfig.addFilter('dateTimeDisplay', date => new Date(date).toLocaleString('en-GB', {
        'dateStyle': 'short',
        'timeStyle': 'short',
    }));

    eleventyConfig.addFilter('timeDisplay', date => new Date(date).toLocaleTimeString('en-GB', {
        'hour': '2-digit',
        'minute': 'numeric',
        'hour12': true
    }));
}