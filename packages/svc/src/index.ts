import path from "path";
import dotenv from "dotenv";
dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV || "development"}.env`)
})
import express from "express";
import logger from "morgan";
import helmet from "helmet";
/** */
const app = express();
/** Middleware */
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(logger("dev"));
/** Routes */
const publicDir = path.resolve(__dirname, process.env.PUBLIC_DIR || "../../ui/build");
app.use("/", express.static(publicDir));
/** Start  */
const port = Number(process.env.PORT || "5000");
app.listen(
  port, (error?: any) => {
    if (error) {
      console.error(error && error.message ? error.message : JSON.stringify(error));
      process.exit(-1);
    }
    console.log("public: ", publicDir);
    console.log("Listening on %s", port);
  }
)
