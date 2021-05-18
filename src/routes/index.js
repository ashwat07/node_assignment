import { Router as expressRouter } from "express";
import controller from "../controller";

const router = expressRouter();

router.get("/", controller.getDelayValue);
router.get("/getItems", controller.getItems);
router.post("/addItem", controller.addItems);

export default router;
