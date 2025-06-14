import express from "express";
import {getWordData, getDLEdata, getDPDdata, getGTGdata, addWordData, deleteWordData} from "./controller.js"

const router = express.Router();

//router.get("/", getWord);
router.post("/", addWordData);
//router.post("/test", addWordTest);
router.delete("/:id", deleteWordData);
router.get("/dle/:word", getDLEdata);
router.get("/dpd/:word", getDPDdata);
router.get("/gtg/:word", getGTGdata);
export default router;
