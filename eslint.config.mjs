import next from '@ygqygq2/eslint-config/next.mjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(...next, {
  ignores: ['*.cjs', 'dist'],
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
