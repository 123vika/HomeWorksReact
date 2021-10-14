const mix = require('laravel-mix');
mix
  .sass('src/client/styles/index.scss', 'dist/')
  .js('src/client/js/index.js', 'dist/')
  .setPublicPath('dist');
