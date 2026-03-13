import next from '@ygqygq2/eslint-config/next.mjs';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

export default tseslint.config(...next, {
  ignores: ['*.cjs', '.next', 'dist', 'node_modules', 'out'],
  plugins: {
    'jsx-a11y': jsxA11y,
  },
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleAttributePerLine: false,
      },
    ],
  },
});
