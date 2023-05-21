module.exports = {
  root: true,
  extends: ["sosa"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
