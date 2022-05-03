"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path = require("path");
const indexPath = path.join(__dirname + "/../client/build/");
app.use(express_1.default.static(indexPath));
app.get("/", function (req, res) {
    res.sendFile(path.join(indexPath));
});
app.listen(3000, () => {
    console.log("server is running!");
});
// 서비스 자동 배포
// 1. client 폴더로 이동
// 2. npm ci
// 3. npm run build
// 4. server 폴더로 이동
// 5. npm ci
// 6. tsc
// 7. node app.js
