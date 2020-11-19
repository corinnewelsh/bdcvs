module.exports = config => {
    // Set directories to pass through to the dist directory
    config.addPassthroughCopy('./src/images/');

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
