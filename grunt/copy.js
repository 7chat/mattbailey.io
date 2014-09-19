module.exports = {
    main: {
        files: [
            {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/smooth-scroll/dist/js/*.min.js'
                ],
                dest: 'scripts/vendor/',
                filter: 'isFile'
            }
        ]
    }
};
