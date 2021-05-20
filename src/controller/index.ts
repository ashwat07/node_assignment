import express from "express";
import joi from "joi";

import constants from "../constants";
import sql from "../config";

const schema = joi.object({
  item: joi.string().required(),
});

const addItems = async (req: express.Request, res: express.Response) => {
  try {
    const { item } = await schema.validateAsync(req.body);
    if (constants.acceptedItems.indexOf(item) !== -1) {
      sql.query(
        "INSERT INTO items (status, item) VALUES ('" +
          "Pending" +
          "', '" +
          item +
          "' )",
        (err: any) => {
          if (err) res.status(500).send({ message: err });
        }
      );
      res.status(200).send({ message: `Item saved successfully!` });
    } else {
      res.status(400).send({ message: `Invalid item!` });
    }
  } catch (error) {
    res.status(400).send({ message: error.details[0].message });
  }
};

const getItems = async (_: any, res: express.Response) => {
  try {
    await sql.query("SELECT * from items", (err: any, response: any) => {
      if (err) throw new Error(err);
      res.status(200).send({ data: response });
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

const getDelayValue = (req: any, res: express.Response) => {
  console.log(req.query.delay_value);
};

export default {
  addItems,
  getItems,
  getDelayValue,
};
