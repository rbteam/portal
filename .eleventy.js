module.exports = function (config) {

    config.addPassthroughCopy("./src/css/")
    config.addWatchTarget("./src/css/")

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
