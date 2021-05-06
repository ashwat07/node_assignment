import express from "express";
import constants from "../constants";
import sql from "../config";

export default {
  getItems: (req: express.Request, res: express.Response) => {
    sql.query("SELECT * from items", (err: any, res: any) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
    res.status(200);
    res.send({ response: "okay" });
  },

  addItems: (req: express.Request, res: express.Response) => {
    const { item } = req.body;
    if (item) {
      if (constants.acceptedItems.indexOf(item) !== -1) {
        sql.query(
          "INSERT INTO items (status, item) VALUES ('" +
            "Pending" +
            "', '" +
            item +
            "' )",
          (err: any) => {
            if (err) res.send({ message: "Save item failed!" });

            res.send({ message: "Item saved successfully!" });
          }
        );
      } else {
        res.status(400);
        res.send({ message: "Unacceptable Item provided!" });
      }
    } else {
      res.status(400);
      res.send({ message: "Invalid Request!" });
    }
  },
};
