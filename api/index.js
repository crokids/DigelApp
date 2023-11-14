import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import tableDataRouter from "./routes/tableData.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/", tableDataRouter)


app.listen(3001, () => {
 console.log("http://localhost:3001");
});