const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
const https = require("https");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}`;

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/fetchTelegramUserId", async (req, res) => {
  try {
    const response = await axios.get(`${TELEGRAM_API_URL}/getMe`);
    const userId = response.data.result.id;

    res.json({ userId });
  } catch (error) {
    console.error("Failed to fetch Telegram userId:", error.message);
    res.status(500).json({ error: "Failed to fetch Telegram userId" });
  }
});

app.get("/getProfilePhoto", async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId parameter" });
  }

  try {
    const response = await axios.get(`${TELEGRAM_API_URL}/getUserProfilePhotos`, {
      params: {
        user_id: userId
      }
    });

    const photos = response.data.result.photos;

    if (photos.length > 0) {
      const fileId = photos[0][0].file_id;

      const fileResponse = await axios.get(`${TELEGRAM_API_URL}/getFile`, {
        params: {
          file_id: fileId
        }
      });

      const filePath = fileResponse.data.result.file_path;
      const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_API_TOKEN}/${filePath}`;

      res.json({ url: fileUrl });
    } else {
      res.status(404).json({ error: "No profile photos found" });
    }
  } catch (error) {
    console.error("Error fetching profile photo:", error.message);
    res.status(500).json({ error: "Failed to fetch profile photo" });
  }
});

const sslOptions = {
  key: fs.readFileSync(path.resolve(__dirname, "server.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "server.cert"))
};

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
