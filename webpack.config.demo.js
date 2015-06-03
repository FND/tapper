var config = require("./webpack.config");

config.entry = "./demo.jsx";
config.output.filename = "demo.js";
module.exports = config;
