import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
