const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const bookRouter = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");
const config = require("./config/config");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use(userRouter);
app.use(bookRouter);
app.use(errorMiddleware);

module.exports = app;
