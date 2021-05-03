import mysql from "mysql";
import config from "./db.config";

const connection = mysql.createConnection({
  host: config.HOST,
  database: config.DB,
  user: config.USER,
  password: "",
});

export default connection;
