module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default'
          })
    ]
};
/*
plugins: {
    'postcss-import': {},
    'autoprefixer': { browsers: ['last 2 versions'] }
}
*/