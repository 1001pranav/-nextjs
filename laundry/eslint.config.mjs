import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend configurations for Next.js and TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Add Prettier integration
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier rules as ESLint errors
    },
  },
];

export default eslintConfig;
