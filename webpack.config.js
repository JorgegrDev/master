const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@firebase', '@react-native-firebase']
    }
  }, argv);

  // Remove default Firebase loading
  config.plugins = config.plugins.filter(plugin => 
    !(plugin.constructor.name === 'HtmlWebpackPlugin' && 
      plugin.options.firebase)
  );

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@firebase/auth': '@firebase/auth/dist/esm2017/index.js',
      '@firebase/app': '@firebase/app/dist/esm2017/index.js',
      '@firebase/database': '@firebase/database/dist/esm2017/index.js',
      '@firebase/firestore': '@firebase/firestore/dist/esm2017/index.js',
      'firebase/app': 'firebase/app/dist/esm2017/index.js',
      'firebase/auth': 'firebase/auth/dist/esm2017/index.js',
      'firebase/database': 'firebase/database/dist/esm2017/index.js',
      'firebase/firestore': 'firebase/firestore/dist/esm2017/index.js'
    }
  };

  // Add custom template
  config.entry = {
    app: path.resolve(__dirname, 'App.tsx')
  };

  // Add copy plugin for static files
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'web-build', 'index.html'),
          to: path.resolve(__dirname, 'web-build')
        },
        { from: 'web/service-worker.js', to: 'service-worker.js' },
        { from: 'web/registerSW.js', to: 'registerSW.js' },
        { from: 'web/manifest.webmanifest', to: 'manifest.webmanifest' },
        { from: 'assets/images', to: 'assets/images' }
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  );

  return config;
};