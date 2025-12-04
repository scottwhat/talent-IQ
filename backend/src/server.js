
import express from "express"
import { ENV } from "./lib/env.js";
import path from "path"

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

console.log(process.env.PORT);

// backend, when somebody sends a get the server respons with res.statu and a json message


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
