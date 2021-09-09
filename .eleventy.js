const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "md",
        "html",
        "scss"
    ]);

    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("browserconfig.xml");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("*.jpg");
    eleventyConfig.addPassthroughCopy("*.png");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("_posts/**/*.md");
    });

    return {
        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
            layouts: "_layouts"
        },

        passthroughFileCopy: true,
    }
};