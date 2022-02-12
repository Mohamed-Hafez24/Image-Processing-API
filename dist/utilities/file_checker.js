"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
// To check the existance of files/images
function checkFileExist(fileName, dir) {
    try {
        // create thumb directory if it does't exist
        if (!(0, fs_1.existsSync)(path_1.default.resolve("assets/".concat(dir)))) {
            (0, fs_1.mkdirSync)(path_1.default.resolve("assets/".concat(dir)));
        }
        // read all file names inside assets/images or assets/thumb
        var files = (0, fs_1.readdirSync)(path_1.default.resolve("assets/".concat(dir)));
        // check if the filename exist on dir files
        // for (const file of files)
        // console.log(file);
        if (files.includes(fileName))
            return true;
        else
            return false;
    }
    catch (err) {
        console.error(err);
    }
    return false;
}
exports.default = checkFileExist;
