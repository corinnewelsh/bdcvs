module.exports = config => {
    // Set directories to pass through to the dist directory
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/_includes/css/');

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
