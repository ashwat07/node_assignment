"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("../controller"));
var router = express_1.Router();
router.get("/getItems", controller_1.default.getItems);
router.post("/addItem", controller_1.default.addItems);
exports.default = router;
//# sourceMappingURL=index.js.map