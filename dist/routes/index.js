"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
// Create root route object
var routes = express_1.default.Router();
// set the root endpoint
routes.get('/', function (req, res) {
    res.send('Welcome to Image processing API');
});
// setting the path to images route as a middleware
routes.use('/images', images_1.default);
exports.default = routes;
