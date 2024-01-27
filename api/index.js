require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({}));
app.get("/api/test", function (req, res) {
  res.status(200).send({ mes: "hello " + Date.now() });
});

if (process.env.API_PORT) {
  app.listen({ port: process.env.API_PORT || 4500 }, () => {
    console.log(`Server OK on localhost:${process.env.API_PORT || 4500}`);
  });
}
app.listen(4000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server OK `);
});
module.exports = app;
