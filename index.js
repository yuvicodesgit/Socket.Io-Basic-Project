import express from "express";
import { Server } from "socket.io";
import http from "http";
import { log } from "console";
const app = express();
const server = http.createServer(app);
app.set("view engine","ejs");
const io = new Server(server);


io.on("connection", (socket) => { 
    console.log("User Connected: ", socket.id);
    socket.on("chat", (data) => {
        io.emit("chat", data);
    });
 });
//routes
app.get("/", (req, res) => {
    res.render("index");
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})