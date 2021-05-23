module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console', 'react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/': './src/',
          '~/components': './src/components',
          '~/configs': './src/configs',
          '~/constants': './src/constants',
          '~/navigations': './src/navigations',
          '~/utils': './src/utils',
          '~/views': './src/views',
          '~/modules': './src/modules',
          '~/templates': './src/templates',
          '~/media': './src/media',
          '~/assets': './src/assets',
        },
      },
    ],
  ],
};
