module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  /*  devServer: {
    host: "192.168.0.12"
  }*/ transpileDependencies: [
    "vuetify"
  ]
};
