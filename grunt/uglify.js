module.exports = {
    main: {
        files: {
            'scripts/main.min.js': ['scripts/main.js']
        }
    },
    buggyfill: {
        files: {
            'scripts/vendor/viewport-units-buggyfill.min.js': ['bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js']
        }
    }
};
