module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        polyfills: ["es.weak-map"],
      },
    ],
  ],
};
