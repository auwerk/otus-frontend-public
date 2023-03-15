const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/user/register': {
        target: 'http://arch.homework',
        changeOrigin: true,
      },
    },
  },
})
