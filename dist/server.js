/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nexports.default = {\r\n    mysql: {\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        host: process.env.DB_HOST,\r\n        database: process.env.DB_SCHEMA\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Query = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar statues_1 = __webpack_require__(/*! ./queries/statues */ \"./src/server/db/queries/statues.ts\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nvar pool = mysql.createPool(config_1.default.mysql);\r\nvar Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        var sql = mysql.format(query, values);\r\n        // console.log(sql); DEBUG\r\n        pool.query(query, values, function (err, results) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.Query = Query;\r\nexports.default = {\r\n    statues: statues_1.default\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/statues.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/statues.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\r\nvar all = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query('SELECT * FROM statues')];\r\n}); }); };\r\nvar one = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"SELECT * FROM statues WHERE statues.id = ?\", [id])];\r\n}); }); };\r\nvar post = function (id, location, title, information, artists, sponsor) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query('INSERT INTO statues (id, location, title, information, artists, sponsor) values (?,?,?,?,?,?)', [id, location, title, information, artists, sponsor])];\r\n}); }); };\r\nvar put = function (editedStatue, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"UPDATE statues SET ? WHERE id = ?\", [editedStatue, id])];\r\n}); }); };\r\nvar destroy = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"DELETE FROM statues WHERE userid = ?\", [id])];\r\n}); }); };\r\nexports.default = {\r\n    all: all,\r\n    one: one,\r\n    post: post,\r\n    put: put,\r\n    destroy: destroy\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/queries/statues.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar statues_1 = __webpack_require__(/*! ./statues */ \"./src/server/routes/statues.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/statues', statues_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/statues.ts":
/*!**************************************!*\
  !*** ./src/server/routes/statues.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express_1.Router();\r\n// GET /api/statues\r\nrouter.get('/:statueid?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var statueid, statue, statues, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                statueid = req.params.statueid;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 6, , 7]);\r\n                if (!statueid) return [3 /*break*/, 3];\r\n                return [4 /*yield*/, db_1.default.statues.one(statueid)];\r\n            case 2:\r\n                statue = (_a.sent())[0];\r\n                res.json(statue);\r\n                return [3 /*break*/, 5];\r\n            case 3: return [4 /*yield*/, db_1.default.statues.all()];\r\n            case 4:\r\n                statues = _a.sent();\r\n                res.json(statues);\r\n                _a.label = 5;\r\n            case 5: return [3 /*break*/, 7];\r\n            case 6:\r\n                error_1 = _a.sent();\r\n                console.log(error_1);\r\n                res.status(500).send(error_1);\r\n                return [3 /*break*/, 7];\r\n            case 7: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/add', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newStatue, newStatueRes, error_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                newStatue = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.statues.post(newStatue.id, newStatue.location, newStatue.title, newStatue.information, newStatue.artists, newStatue.sponsor)];\r\n            case 2:\r\n                newStatueRes = _a.sent();\r\n                res.json({ msg: 'added new statue', newStatueRes: newStatueRes });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_2 = _a.sent();\r\n                console.log(error_2);\r\n                res.status(500).send(error_2);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var statueid, editedStatue, error_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                statueid = req.params.id;\r\n                editedStatue = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.statues.put(statueid, editedStatue)];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({ msg: 'single statue by id ' + statueid });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_3 = _a.sent();\r\n                console.log(error_3);\r\n                res.status(500).send(error_3);\r\n                return [3 /*break*/, 4];\r\n            case 4:\r\n                ;\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var statueid;\r\n    return __generator(this, function (_a) {\r\n        statueid = req.params.id;\r\n        try {\r\n            res.json({ msg: 'deleted statue by id ' + statueid });\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            res.status(500).send(error);\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/statues.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\r\nvar compression = __webpack_require__(/*! compression */ \"compression\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\napp.use(helmet());\r\napp.use(cors());\r\napp.use(compression());\r\napp.use(morgan('dev'));\r\napp.use(express.static('public'));\r\napp.use(express.json());\r\napp.use('/api', routes_1.default);\r\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;