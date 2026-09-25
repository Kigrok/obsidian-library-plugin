import tseslint from 'typescript-eslint'
import obsidian from 'eslint-plugin-obsidianmd'

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  ...obsidian.configs.recommended,
  {
    languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } }
  },
  {
    // Tests and the obsidian stub run in Node under vitest, not in a mobile
    // Obsidian window, and deliberately poke loosely typed shapes.
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-implied-eval': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'obsidianmd/no-global-this': 'off',
      'obsidianmd/no-new-func': 'off',
      'obsidianmd/no-nodejs-modules': 'off',
      'obsidianmd/prefer-create-el': 'off',
      'obsidianmd/rule-custom-message': 'off'
    }
  },
  { ignores: ['main.js', 'esbuild.config.mjs', 'version-bump.mjs', 'eslint.config.mjs', 'vitest.config.ts'] }
)
