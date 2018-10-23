module.exports = {
  env: {
    legacy: {
      presets: [
        ['@babel/env', {
          targets: {
            node: 6
          }
        }]
      ]
    },
    modern: {
      presets: [
        ['@babel/env', {
          targets: {
            node: 8
          }
        }]
      ]
    },
    test: {
      presets: [
        ['@babel/env', {
          targets: {
            node: 'current'
          }
        }]
      ]
    }
  }
}
