module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          components: './src/components',
          screens: './src/screens',
          models: './src/models',
          constants: './src/constants',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
};
