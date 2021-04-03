const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./src/index.jsx",
    output: { // NEW
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    }, // NEW Ends
    plugins: [htmlPlugin],
    module: {
      rules: [
        {
          
        }
      ]
    }
  };
};