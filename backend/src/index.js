const express = require("express");
const routes = require("./routes");
//Cors vai determinar quem vai acessar a nossa aplicação
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 - Server Is Running!");
});
