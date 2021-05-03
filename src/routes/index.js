import { Router as expressRouter } from "express";
import controller from "../controller";

const router = expressRouter();

router.get("/getItems", controller.getItems);
router.post("/addItem", controller.addItems);

export default router;
