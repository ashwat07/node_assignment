"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var db_config_1 = __importDefault(require("./db.config"));
var connection = mysql_1.default.createConnection({
    host: db_config_1.default.HOST,
    database: db_config_1.default.DB,
    user: db_config_1.default.USER,
    password: "",
});
connection.connect(function (err) {
    if (err)
        console.error(err);
    // console.log("Database Server Connected!");
});
exports.default = connection;
//# sourceMappingURL=index.js.map