const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {  // 代理所有以/api开头的路由
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
