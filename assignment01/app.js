console.log("ich bin die app.js - Datei");

require("./hallo");

const data = require("./hallo.js");

console.log(data.name("Hallo "));

require("./unterordner/app.js");

require("./unterordner");
