const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js', // Убедитесь, что это единственная точка входа
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js', // Уникальное имя для каждого чанка
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext][query]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all', // Разделение на чанки для оптимизации кода
        name: (module, chunks, cacheGroupKey) => {
          return `${cacheGroupKey}-${module.id}`;
        },
      },
      runtimeChunk: {
        name: 'runtime', // Разделяет runtime в отдельный чанк
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'images'),
            to: path.resolve(__dirname, 'dist/images'),
          },
        ],
      }),
      ...(isProduction ? [
        new ImageMinimizerPlugin({
          minimizerOptions: {
            plugins: [
              ['optipng', { optimizationLevel: 5 }],
              ['mozjpeg', { quality: 70 }],
              ['svgo', { plugins: [{ removeViewBox: false }] }],
            ],
          },
        }),
      ] : []),
    ],
    devServer: {
      historyApiFallback: true,
      static: [
        {
          directory: path.join(__dirname, 'public'),
          publicPath: '/',
        },
        {
          directory: path.join(__dirname, 'images'),
          publicPath: '/images',
        },
      ],
      port: 3000,
      hot: true,
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
