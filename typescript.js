module.exports = {
  parser: '@typescript-eslint/parser',
  ecmaFeatures: {
    jsx: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    // we use prettier instead
    '@typescript-eslint/indent': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
}
