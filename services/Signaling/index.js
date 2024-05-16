import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

// Serve a simple hello world message at the root

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Handle socket connections

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // Handle joining a room
  socket.on("join-room", (room) => {
    console.log(`User ${socket.id} joined room ${room}`);
    socket.join(room);
  });

  // Handle incoming messages and emit to the specific room

  socket.on("message", ({ room, message }) => {
    console.log({ room, message });

    io.to(room).emit("recieve-message", message);
  });
  // Handle broadcasting a message to all clients except the sender

  socket.on("message", (data) => {
    console.log(data);
    console.log(`User joineed room ${room}`);

    socket.broadcast.emit("recieve-message", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

//express server listning
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
