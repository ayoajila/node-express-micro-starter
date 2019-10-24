module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['jest', 'security'],
  env: {
    'es6': true,
    'jest/globals': true,
    'browser': true,
    'amd': true,
    'node': true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-require': 'off',
    'security/detect-non-literal-fs-filename': 'off',
  },
}