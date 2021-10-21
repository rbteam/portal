module.exports = function (config) {

    config.addPassthroughCopy("./src/css/")
    config.addPassthroughCopy("./src/scss/")
    config.addPassthroughCopy("./src/js/")
    config.addPassthroughCopy("./src/img/")

    config.addWatchTarget("./src/css/")
    config.addWatchTarget("./src/scss/")
    config.addWatchTarget("./src/js/")
    config.addWatchTarget("./src/img/")

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
