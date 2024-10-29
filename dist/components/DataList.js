"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
var DataList = function () {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default.get('/api/data')
            .then(function (response) { return setData(response.data); })
            .catch(function (error) { return console.error('Error fetching data', error); });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Data List" }), (0, jsx_runtime_1.jsx)("ul", { children: data.map(function (item) { return ((0, jsx_runtime_1.jsxs)("li", { children: [item.name, ": ", item.description] }, item.id)); }) })] }));
};
exports.default = DataList;
