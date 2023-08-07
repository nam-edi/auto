const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

const api = require("./api");
const app = express();
const PORT = 3001;

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(PORT, (req, res) => {
      console.log(`Listening to http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(Error));

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    front: "http://localhost:5173/",
    api: "http://localhost:3001",
    doc: "http://localhost:3001/doc/#/",
  });
});

app.use("/api", api);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
