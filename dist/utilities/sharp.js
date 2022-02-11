"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
// to resize the image using sharp
function resizeImage(fileName, width, height, res) {
    // input file
    var inputFilePath = path_1.default.resolve("assets/images/".concat(fileName, ".jpg"));
    // output file to cash the image with this size
    var outputFilePath = path_1.default.resolve("assets/thumb/".concat(fileName, "_").concat(width, "x").concat(height, ".jpg"));
    // using sharp module to resize the image
    (0, sharp_1.default)(inputFilePath)
        .resize(width, height)
        .toFile(outputFilePath, function (err) {
        if (err)
            throw err;
        // show image on the browser after resizing
        res.sendFile(outputFilePath);
    });
}
exports.default = resizeImage;
