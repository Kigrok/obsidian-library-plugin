import tseslint from 'typescript-eslint'
import obsidian from 'eslint-plugin-obsidianmd'

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  ...obsidian.configs.recommended,
  {
    languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } }
  },
  { ignores: ['main.js', 'esbuild.config.mjs', 'version-bump.mjs', 'eslint.config.mjs'] }
)
