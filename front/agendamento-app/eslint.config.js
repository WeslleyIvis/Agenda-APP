import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  // Configuração base de ignores
  {
    ignores: ['dist/**', '**/*.d.ts', '**/vite.config.ts', '**/*.config.*']
  },
  
  // Configuração JavaScript padrão
  js.configs.recommended,
  
  // Configuração TypeScript
  ...tseslint.configs.recommended,
  
  // Configuração específica do projeto
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.app.json' // Isso vai automaticamente encontrar o tsconfig.json mais próximo
      }
    },
    plugins: {
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // Regras do React
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      
      // Regras de estilo
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        ignoredNodes: [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ]
      }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      
      // Regras do TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];