const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/poc-ai-workflow/" : "/",
  transpileDependencies: true,
  devServer: {
    port: 8000,
  }
})
