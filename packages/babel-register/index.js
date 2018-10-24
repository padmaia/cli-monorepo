const someCliBabelPreset = require('some-cli-babel-preset');

require('@babel/register')({
  ignore: [
    filepath => filepath.includes('/node_modules/')
  ],
  presets: [someCliBabelPreset]
});
