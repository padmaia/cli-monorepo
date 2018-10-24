module.exports = () => ({
  presets: [
    [require('@babel/preset-env'), {
      targets: {
        node: 6
      }
    }]
  ]
});
