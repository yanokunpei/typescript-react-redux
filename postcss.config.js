module.exports = {
  plugins: [
    require('postcss-reporter')({ clearMessages: true }),
    require('postcss-preset-env')({
      stage: 0,
      importFrom: 'src/css/variables.css',
    }),
  ],
};
