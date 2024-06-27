import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to handle JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

mongoose
  .connect(process.env.DB_URI, { dbName: "telegram_miniapp" })
  .then(() => {
    console.log("Connected to DB successfully");
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// Catch all handler for any requests to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
