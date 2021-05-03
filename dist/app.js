"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
// const sql = require("./config");
config_1.default.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
var app = express_1.default();
app.use(express_1.default.json());
var port = process.env.PORT || 3000;
app.post("/addItem", function (req, res) {
    req.accepts("application/json");
    console.log(req.body);
    config_1.default.query("SELECT * from items", function (err, res) {
        if (err) {
            console.log(err);
        }
        console.log(res);
    });
    res.status(200);
    res.send({ response: "okay" });
});
app.listen(port, function () {
    return console.log("Sever is listening at" + port);
});
//# sourceMappingURL=app.js.map