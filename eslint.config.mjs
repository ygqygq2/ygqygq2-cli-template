import taroReact from '@ygqygq2/eslint-config/taro-react'

export default [
  {
    ignores: [
      'build/*.js',
      'src/assets/**',
      'dist/**',
      'node_modules/**',
      'webpack.config.js',
      'babel.config.js'
    ]
  },
  ...taroReact
]
