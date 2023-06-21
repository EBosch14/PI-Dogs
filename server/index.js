require("dotenv").config();

const server = require("./src/app");
const PORT = process.env.SV_PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}/`);
});
