const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["*"],
  },
});
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("/connected", socket.id);

  socket.on("/newMessage", (msg) => {
    socket.broadcast.emit("/sentMessage", msg);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
