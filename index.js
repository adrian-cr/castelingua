import dotenv from "dotenv";
import express from "express";
import router from "./src/router.js";
import connectDB from "./src/db.js"
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(express.static(path.join(__dirName, "/client/build")));
app.get('/*any', (req, res) => res.sendFile(path.join(__dirName, "/client/build/index.html")));

dotenv.config();
connectDB();

const port = process.env.PORT || 3005;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
