const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const router = require("../server/routes.ts");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.listen(port, () => {
  console.log("server listening on 8080");
});
