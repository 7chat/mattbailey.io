module.exports = {
    options: {
        limit: 3
    },
    first: [
        'newer:copy',
        'newer:uglify',
        'newer:imagemin'
    ],
    second: [
        'shell'
    ]
};
