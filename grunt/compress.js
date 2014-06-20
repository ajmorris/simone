module.export = {
    all: {
        options: {
            mode: 'gzip'
        },
        files: [
            {expanded: true, src: ['js/min/*.js'], dest: '.', ext: '.js.gz'},
            {expanded: true, src: ['stylesheets/*.css'], dest: '.', ext: '.css.gz'}
        ]
    }
};