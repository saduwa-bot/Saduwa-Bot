const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ovBi0byL#3pZV9DCdHlOu9YE2aBQR1CU_iOiJq8jLiD4fKQTwG-I",
  MONGODB: process.env.MONGODB || "mongodb://mongo:ODGecnhWQRTeRgUGAuBbXlILxhIfPIMt@switchback.proxy.rlwy.net:55317",
  OWNER_NUM: process.env.OWNER_NUM || "94771131574",
};
