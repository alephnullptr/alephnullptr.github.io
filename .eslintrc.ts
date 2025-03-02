module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json', // Links to your TypeScript config
    }, 
    plugins: ['@typescript-eslint', 'import'],
    extends: [
      'eslint:recommended', // ESLint recommended rules
      'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
      'plugin:import/recommended', // Import/export rules
      'plugin:import/typescript', // TypeScript import resolution
    ],
    rules: {
      // Custom rules or overrides
      '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ], // Enforce consistent import order},
    },
    settings: {
        'import/resolver': {
            typescript: true, // Use TypeScript for import resolution
            node: true,
        },
    },
};