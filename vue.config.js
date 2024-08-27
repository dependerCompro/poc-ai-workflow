const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/ai-workflow-creator/" : "/",
  transpileDependencies: true,
  devServer: {
    port: 8000,
  }
})
