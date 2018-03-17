import * as path from "path";
import * as dotenv from "dotenv";
dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV || "development"}.env`)
})
import * as express from "express";
import * as logger from "morgan";
// import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import errorHandler from "./error-handler";
/** */
const app = express();
/** Middleware */
// uncomment after placing your favicon in /public
app.use(helmet());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(errorHandler);
/** Routes */
const publicDir = path.join(__dirname, process.env.PUBLIC_DIR|| "../../ui/build");
app.get("/", (_, response) => {
  response.sendFile(path.resolve(publicDir, "index.html"))
});
app.use("/", express.static(publicDir));
/** Start  */
const port = Number(process.env.PORT || "5000");
app.listen(
  port, (error: any) => {
    if (error) {
      console.error("error: \n", error && error.message ? error.message : JSON.stringify(error));
      process.exit(-1);
    }
    console.log("public: ", publicDir);
    console.log("Listening on %s", port);
  }
)
