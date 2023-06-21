require("dotenv").config();
const { conn } = require("./src/db");
const server = require("./src/app");
const { SV_PORT } = process.env;

server.listen(SV_PORT, () => {
  conn.sync({force:true})
  console.log(`Server listen on http://localhost:${SV_PORT}/`);
});
