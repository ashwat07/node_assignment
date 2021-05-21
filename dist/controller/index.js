"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var node_fetch_1 = __importDefault(require("node-fetch"));
// import request from "request";
var perf_hooks_1 = require("perf_hooks");
var constants_1 = __importDefault(require("../constants"));
var config_1 = __importDefault(require("../config"));
var schema = joi_1.default.object({
    item: joi_1.default.string().required(),
});
var addItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, schema.validateAsync(req.body)];
            case 1:
                item = (_a.sent()).item;
                if (constants_1.default.acceptedItems.indexOf(item) !== -1) {
                    config_1.default.query("INSERT INTO items (status, item) VALUES ('" +
                        "Pending" +
                        "', '" +
                        item +
                        "' )", function (err) {
                        if (err)
                            res.status(500).send({ message: err });
                    });
                    res.status(200).send({ message: "Item saved successfully!" });
                }
                else {
                    res.status(400).send({ message: "Invalid item!" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).send({ message: error_1.details[0].message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getItems = function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, config_1.default.query("SELECT * from items", function (err, response) {
                        if (err)
                            throw new Error(err);
                        res.status(200).send({ data: response });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({ message: "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getDelayValue = function (req, res) {
    var delay_value = req.query.delay_value;
    var concurrent = Array(5)
        .fill(externalEntityCall)
        .map(function (fn) { return fn(delay_value); });
    var t0 = perf_hooks_1.performance.now();
    Promise.all(concurrent)
        .then(function () {
        var t1 = perf_hooks_1.performance.now();
        res.status(200).send({ time_taken: t1 - t0 });
    })
        .catch(function () { return res.status(500).send({ message: "OOps!!" }); });
};
var externalEntityCall = function (q) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1.default("https://httpbin.org/delay/" + q)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = {
    addItems: addItems,
    getItems: getItems,
    getDelayValue: getDelayValue,
};
//# sourceMappingURL=index.js.map