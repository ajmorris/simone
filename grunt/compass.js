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
            sassDir: 'sass',
            cssDir: 'stylesheets',
            fontsDir: 'fonts',
            javascriptDir: 'js',
            imagesDir: 'images',
            relativeAssets: true,
            environment: 'development',
            outputStyle: 'compressed',
            noLineComments: true,
            force: true
        }
    }
};
