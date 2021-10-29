// Import module
const { gifu } = require("./index");

// Request GIF
let successReq = gifu("bite");
let failureReq = gifu("1234");

// Log result
console.log("bite", "=>", "(success):", successReq);
console.log("1234", "=>", "(failure):", failureReq);
