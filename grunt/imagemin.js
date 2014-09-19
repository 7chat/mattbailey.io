module.exports = {
    options: {
        cache: false
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'images/src/',
            src: ["**/*.{png,jpg,gif}"],
            dest: 'images/dist/'
        }]
    }
};
