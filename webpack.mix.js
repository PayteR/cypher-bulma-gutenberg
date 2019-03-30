const mix = require('laravel-mix');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/_all.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19031',
    files: ["public/**/*"],
    port: 19033,
    ui: {
      port: 19034
    },
    watch: true
  });
