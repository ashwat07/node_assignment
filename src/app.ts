import express from "express";
import sql from "./config";

// const sql = require("./config");

sql.connect((err: any) => {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/addItem", (req, res) => {
  req.accepts("application/json");
  console.log(req.body);
  sql.query("SELECT * from items", (err: any, res: any) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
  res.status(200);
  res.send({ response: "okay" });
});

app.listen(port, () => {
  return console.log(`Sever is listening at${port}`);
});
