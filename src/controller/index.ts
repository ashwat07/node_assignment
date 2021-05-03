import constants from "../constants";
import sql from "../config";

export default {
  getItems: (req: any, res: any) => {
    sql.query("SELECT * from items", (err: any, res: any) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
    res.status(200);
    res.send({ response: "okay" });
  },

  addItems: (req: any, res: any) => {
    const { item } = req.body;
    if (item) {
      if (constants.acceptedItems.indexOf(item) !== -1) {
        sql.query(
          "INSERT INTO items (status, item) VALUES ('" +
            "Pending" +
            "', '" +
            item +
            "' )",
          (err: any, res: any) => {
            if (err) {
              console.log(err);
            }

            console.log(res);
          }
        );
      } else {
        res.status(400);
        res.send({ error: "Unacceptable Item provided!" });
      }
    } else {
      res.status(400);
      res.send({ error: "Invalid Request!" });
    }
  },
};
