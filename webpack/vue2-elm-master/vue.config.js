const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const env = process.env.NODE_ENV;

module.exports = defineConfig({
  configureWebpack: {
    devServer: {
      proxy: {
        "/": {
          target: "https://elm.cangdu.org",
          ws: false,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
  },
});
