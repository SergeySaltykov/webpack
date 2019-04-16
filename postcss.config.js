module.exports = {
  plugins: [
      // require('autoprefixer'), есть по умолчанию в postcss-preset-env
      // require('postcss-flexbugs-fixes'), по умолчанию
      // require('postcss-gradient-transparency-fix'),
      require('postcss-import'),
      require('postcss-url'),
      require('postcss-preset-env')({
          stage: 3,
          features: {
              'nesting-rules': true, // включение правила вложенности.
          }
      }),
  ],
};

