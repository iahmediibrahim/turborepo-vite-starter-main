module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['cib'],
  // Lint ".storybook" folder (don't ignore it)
  ignorePatterns: ['!.storybook']
};
