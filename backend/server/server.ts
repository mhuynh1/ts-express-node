import { dbClient } from "./mongodb";
import * as dotenv from "dotenv";
import router from "./routes";

const app = require("express")();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(router);

dbClient();
app.listen(port);
console.log(`API listening on port: ${port}`);
