const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@authComps": path.resolve(__dirname, "src/components/auth"),
        "@displayComps": path.resolve(__dirname, "src/components/display"),
        "@projectComps": path.resolve(__dirname, "src/components/projects"),
        "@structureComps": path.resolve(__dirname, "src/components/structure"),
        "@js": path.resolve(__dirname, "src/js"),
        "@vuex": path.resolve(__dirname, "src/js/vuex"),
        "@svc": path.resolve(__dirname, "src/js/svc"),
        "@apiSvc": path.resolve(__dirname, "src/js/svc/apiSvc"),
        "@conversionSvc": path.resolve(__dirname, "src/js/svc/conversionSvc"),
        "@validationSvc": path.resolve(__dirname, "src/js/svc/validationSvc"),
        "@projectListingSvc": path.resolve(
          __dirname,
          "src/js/svc/projectListingSvc"
        ),
      },
    },
  },
});
