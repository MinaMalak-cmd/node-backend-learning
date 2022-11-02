// console.log("Hello");
// console.log(global);

// const os = require("os");
// const path = require("path");

// console.log("🚀 ~ file: server.js ~ line 5 ~ os", os.type())
// console.log("🚀 ~ file: server.js ~ line 5 ~ os", os.homedir())
// console.log("🚀 ~ file: server.js ~ line 5 ~ os", os.version());

// console.log(__dirname);
// console.log(__filename);

// console.log("🚀 ~ file: server.js ~ line 13 ~ path", path.dirname(__filename))
// console.log("🚀 ~ file: server.js ~ line 13 ~ path", path.extname(__filename))
// console.log("🚀 ~ file: server.js ~ line 13 ~ path", path.basename(__filename))


const {add,div,sub,mul} = require("./math");
console.log("🚀 ~ file: server.js ~ line 20 ~ add", add(3,5))
console.log("🚀 ~ file: server.js ~ line 20 ~ add", mul(3,5))
console.log("🚀 ~ file: server.js ~ line 20 ~ add", sub(3,5))
console.log("🚀 ~ file: server.js ~ line 20 ~ add", div(3,5))


