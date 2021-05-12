module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/test-pwa8/' // materialize-app
      : '/',
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'Mi PWA8'
      }
    },
    pwa: {
      name: 'test-pwa8',
      themeColor: '#9900aa',
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        swSrc: "./src/service-worker.js"
      }
    }
}