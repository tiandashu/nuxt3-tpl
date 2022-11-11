// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    output: {
      dir: '../dist',
    },
    devProxy: {
      '/api': { target: 'https://example.com', changeOrigin: true },
    },
  },
  vite: {
    server: {
      proxy: {
        '/api': { target: 'https://example.com', changeOrigin: true },
      },
    },
  },
});
