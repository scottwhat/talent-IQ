
import express from "express"
import { ENV } from "./lib/env.js";

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);

// backend, when somebody sends a get the server respons with res.statu and a json message
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running...s" });
});


app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
