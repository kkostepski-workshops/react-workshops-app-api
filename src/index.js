import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();

const connectToDB = () => {
  mongoose.connect("mongodb://localhost/react-workshops", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  if (!db) {
    console.log("Error connecting DB");
  } else {
    console.log("DB connected successfully");
  }
};

connectToDB();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use("/api", routes);
app.get("/", (req, res) => res.send("React workshops API"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running React workshops API on port ${port}`);
});
