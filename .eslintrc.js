module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-sosa`
  extends: ["sosa"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
