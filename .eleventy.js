module.exports = config => {
    // Set directories to pass through to the dist directory
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/_includes/css/');
    config.addPassthroughCopy('./src/documents/');
    
    // Returns a list of news items
    config.addCollection('news', collection => {
        return collection.getFilteredByGlob('./src/news/*.md')
            .sort((a, b) => b.data.order - a.data.order);
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
