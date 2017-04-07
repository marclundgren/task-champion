module.exports = {
  parser: 'babel-eslint',
  rules: {
    //
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'react',
    'react-native',
  ],
  ecmaFeatures: {
    'jsx': true,
  },
};
