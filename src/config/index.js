import mysql from "mysql";
import config from "./db.config";

const connection = mysql.createConnection({
  host: config.HOST,
  database: config.DB,
  user: config.USER,
  password: "",
});

connection.connect((err) => {
  if (err) console.error(err);
  // console.log("Database Server Connected!");
});

export default connection;
