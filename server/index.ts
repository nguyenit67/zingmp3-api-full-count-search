import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { searchSongs } from "../src";

dotenv.config();

const app = express();
const port = process.env.PORT || "8080";

// @ts-ignore
app.get("/search-songs", cors(), (req, res) => {
  const { keyword, page, count } = req.query;
  searchSongs(keyword, page, count).then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
