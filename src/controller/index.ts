import express from "express";
import joi from "joi";
import fetch from "node-fetch";
// import request from "request";

import { performance } from "perf_hooks";
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
  const { delay_value } = req.query;
  const concurrent = Array(5).fill(externalEntityCall(delay_value));

  const t0 = performance.now();
  Promise.all(concurrent)
    .then(() => {
      const t1 = performance.now();
      res.status(200).send({ time_taken: t1 - t0 });
    })
    .catch(() => res.status(500).send({ message: "OOps!!" }));
};

const externalEntityCall = (q: Number) => {
  return fetch(`https://httpbin.org/delay/${q}`);
};

export default {
  addItems,
  getItems,
  getDelayValue,
};
