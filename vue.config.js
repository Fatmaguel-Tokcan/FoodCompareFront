const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devserver: {    
    proxy: {        
      target: 'http://localhost:5000',        
      ws: true,        
      changeOrigin: true,    
    }  
  }
})
