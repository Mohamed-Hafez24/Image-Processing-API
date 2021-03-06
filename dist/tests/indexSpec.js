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
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var file_checker_1 = __importDefault(require("../utilities/file_checker"));
var sharp_1 = __importDefault(require("../utilities/sharp"));
// test endpoint
var request = (0, supertest_1.default)(index_1.default);
describe('1- Test Endpoint Response', function () {
    it('expect response status to be 200 for the get endpoint /api', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('expect response status to be 200 for the get endpoint api/images?filename=encenadaport&width=500&height=100', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=encenadaport&width=500&height=100')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toEqual(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('expect endpoint get api/images?filename=encenadaport&width=500&height=100 responds with image/jpeg', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/api/images?filename=encenadaport&width=500&height=100')
                            .expect('Content-Type', 'image/jpeg')
                            .expect(200)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('expect a message when enter a wrong filename', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=seaImg&width=500&height=100')];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('Please, Enter a valid filename');
                    return [2 /*return*/];
            }
        });
    }); });
    it('expect a message when enter a wrong width and height', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=encenadaport&width=kk&height=yy')];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('Please, Enter a valid number for width and height');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('2- Test utilities functions ', function () {
    it('expect checkFileExist functin to return false with file name img_100x3030.jpg', function () {
        expect((0, file_checker_1.default)('img_100x200.jpg', 'thumb')).toBeFalse();
    });
    it("expect checkFileExist functin to return true with file name icelandwaterfall.jpg doesn't exist in thumb folder", function () {
        expect((0, file_checker_1.default)('icelandwaterfall.jpg', 'thumb')).not.toBe(true);
    });
    it('expect checkFileExist functin to return true with file name icelandwaterfall.jpg exist in images folder', function () {
        expect((0, file_checker_1.default)('icelandwaterfall.jpg', 'images')).toBe(true);
    });
    it('expect resizeImage functin to be defined', function () {
        expect(sharp_1.default).toBeDefined();
    });
    it("expect resizeImage functin to return the 'assets/thumb/icelandwaterfall_500x300.jpg' path of icelandwaterfall.jpg with width=500 and height=300", function () { return __awaiter(void 0, void 0, void 0, function () {
        var resizeImageResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, sharp_1.default)('icelandwaterfall', 500, 300)];
                case 1:
                    resizeImageResult = _a.sent();
                    expect(resizeImageResult).toEqual('assets/thumb/icelandwaterfall_500x300.jpg');
                    return [2 /*return*/];
            }
        });
    }); });
});
