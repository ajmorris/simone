module.exports = {
    dev: {
        options: {
            sassDir: 'sass',
            cssDir: 'stylesheets',
            fontsDir: 'fonts',
            javascriptDir: 'js',
            imagesDir: 'images',
            relativeAssets: true,
            environment: 'development',
            outputStyle: 'expanded',
            noLineComments: false
        }
    },

    prod: {
        options: {
            config: 'config.rb',
            force: true
        }
    }
};
