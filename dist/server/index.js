"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const src_1 = require("../src");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || "8080";
// @ts-ignore
app.get("/search-songs", (0, cors_1.default)(), (req, res) => {
    const { keyword, page, count } = req.query;
    (0, src_1.searchSongs)(keyword, page, count).then((data) => res.json(data));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map