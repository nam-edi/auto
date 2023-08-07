const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Todo Api",
    description: "Todo Api",
  },
  host: "localhost:3001",
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/api/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
