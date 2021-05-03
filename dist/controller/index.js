"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../constants"));
var config_1 = __importDefault(require("../config"));
exports.default = {
    getItems: function (req, res) {
        config_1.default.query("SELECT * from items", function (err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
        });
        res.status(200);
        res.send({ response: "okay" });
    },
    addItems: function (req, res) {
        var item = req.body.item;
        if (item) {
            if (constants_1.default.acceptedItems.indexOf(item) !== -1) {
                config_1.default.query("INSERT INTO items (status, item) VALUES ('" +
                    "Pending" +
                    "', '" +
                    item +
                    "' )", function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(res);
                });
            }
            else {
                res.status(400);
                res.send({ error: "Unacceptable Item provided!" });
            }
        }
        else {
            res.status(400);
            res.send({ error: "Invalid Request!" });
        }
    },
};
//# sourceMappingURL=index.js.map