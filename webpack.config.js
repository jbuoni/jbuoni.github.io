const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx"]
  },
  entry: APP_DIR + '/index.tsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: 'awesome-typescript-loader',
              include: __dirname
          },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          },
          {
            test: /\.less$/,
            sideEffects: true,
            use: [
              'style-loader',
              'css-loader',
              'less-loader'
            ]
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env', '@babel/react'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader'
              }
            ]
          },
          {
            test: /\.(png|jpg|gif|pdf|mp4)$/,
            use: {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                publicPath: './images'
              }
            }
          }
    
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};

// module.exports = {
//   entry: APP_DIR + '/index.tsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'js/bundle.js',
//     hotUpdateChunkFilename: 'hot/hot-update.js',
//     hotUpdateMainFilename: 'hot/hot-update.json'
//   },
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({
//       filename: 'public/index.html',
//       template: 'public/index.html'
//     }),
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new WriteFilePlugin({
//       test: /^(?!.*(hot)).*/,
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.ts(x?)$/,
//         exclude: /node_modules/,
//         use: [
//             {
//                 loader: "ts-loader"
//             }
//         ]
//       },
//       {
//         enforce: 'pre',
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'eslint-loader',
//         options: {
//           cache: true,
//           fix: false,
//           failOnError: false
//         }
//       },

//     ]
//   },
//   externals: {
//     "react": "React",
//     "react-dom": "ReactDOM",
//   }
// };
