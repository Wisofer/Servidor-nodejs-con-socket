import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: "https://frontend-wiso.netlify.app"
  }
});

io.on("connection", socket => {
  console.log("Cliente Conectado");
});

app.get("/", (req, res) => {
  res.send("Hola amigos que tal todo soy el backend, Tranquilo no tengas miedo");
});

server.listen(3000);
console.log("Servidor Encendido :D");