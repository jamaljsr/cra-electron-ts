module.exports = [
  // set target on webpack config
  config => {
    config.target = "electron-renderer";
    return config;
  },
  // add babel-plugin-import for antd
  [
    "use-babel-config",
    {
      presets: ["react-app"],
      plugins: [
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true
          }
        ]
      ]
    }
  ],
  // add less-loader for antd
  config => {
    const rule = config.module.rules.find(rule => rule.oneOf);
    rule.oneOf.unshift({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true,
            modifyVars: require("@ant-design/dark-theme")
          }
        }
      ]
    });

    return config;
  },
  config => {
    // helper function to troubleshoot webpack config issues
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    Function.prototype.toJSON = Function.prototype.toString;
    // uncomment the line below to log the webpack config to the console
    // console.log(JSON.stringify(config, null, 2));
    return config;
  }
];
