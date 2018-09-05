module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      'postcss-import': { root: file.dirname },
      'postcss-preset-env': options['postcss-preset-env'] ? options['postcss-preset-env'] : false,
      'cssnano': env === 'production' ? options.cssnano : false
    }
});

/*module.exports = {
    parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {}
    }
}*/