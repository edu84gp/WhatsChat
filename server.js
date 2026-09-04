import express from "express";
import { Server } from "socket.io";
import http from "http";
import { env } from "process";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*"}
});

const port = env.PORT || 3000;
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado con ID:", socket.id);

  // Evento principal del chat: retransmite el mensaje a todos los clientes
  socket.on("chat:message", (data) => {
    console.log("Mensaje recibido:", data);
    io.emit("chat:message", data);
  });

  // Evento de prueba del bootcamp
  socket.on("mensaje", (data) => {
    console.log("Mensaje recibido del cliente:", data);
    socket.emit("respuesta", "Mensaje recibido correctamente");
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

server.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});