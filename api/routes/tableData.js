import express from "express";
import { getTableData } from "../controllers/tableData.js";

const router = express.Router();

router.get("/tableinfo", getTableData);

export default router;