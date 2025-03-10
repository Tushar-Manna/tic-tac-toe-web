import http from "http";
import { Server, Socket } from "socket.io";

const port = 3000;


const server = http.createServer((req, res) => {
    res.write("hello");
    res.end();
})

const io = new Server(server, {
    cors:{
        origin:"*",
        method: ["GET", "POST"]
    }
})

io.on("connection", () => {
    console.log("a used just connected");
})

io.on("disconnect", () => {
    console.log("a user just disconnected")
})



server.listen(port, () => {
    console.log(`server started on port ${port}`);
})


