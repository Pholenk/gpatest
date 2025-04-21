module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['jest'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
  ],
};
