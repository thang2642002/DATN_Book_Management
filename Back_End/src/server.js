import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import apiWebRoutes from "./routes/api";
import configCors from "./config/cors";
import bodyParser from "body-parser";

require("dotenv").config();
// import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8080;

// Config cors
configCors(app);

// Config view engine
configViewEngine(app);

// Middleware để log request body
app.use((req, res, next) => {
  // console.log("Request Body:", req.body); // Log body của yêu cầu
  next();
});

// Config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Test connection db
// connection();

// Init web routes
initWebRoutes(app);
apiWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});
