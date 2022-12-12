require("./dbConnection");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: ["*"],
  },
});
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/route", require("./Routes"));

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("/connected", socket.id);

  socket.on("/newMessage", (msg) => {
    socket.broadcast.emit("/sentMessage", msg);
  });

  socket.on("/Hello", g => {
    console.log(g)
  })
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
