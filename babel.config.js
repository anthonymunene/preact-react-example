module.exports = {
    presets: [
      "@babel/react",
      [
        "@babel/preset-env"
      ],
    ],
    plugins: [
      ["@babel/plugin-transform-runtime", {
        corejs: 3,
        proposals: true
      }],
    ],
};
  