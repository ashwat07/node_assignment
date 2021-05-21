"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(express_1.default.json());
var port = process.env.PORT || 3000;
app.use("/", routes_1.default);
app.listen(port, function () {
    console.log("Server is listening at " + port);
});
console.log(process.env.PROCESS_TYPE);
//# sourceMappingURL=app.js.map