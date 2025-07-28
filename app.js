require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", chatRoutes);

const { chatHandler } = require("./controllers/chatController");
io.on("connection", (socket) => {
  console.log("✅ User connected");

  socket.on("userMessage", async (msg) => {
    const response = await chatHandler(msg);
    socket.emit("botMessage", response);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
