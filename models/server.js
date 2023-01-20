const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.PORT = process.env.PORT;

    this.paths = {};
    //middlewares
    this.middlewares();
    //routes app
    this.routes();
    //sockets
    this.sockets();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //PUBLIC DIRECTORY
    this.app.use(express.static("public"));
  }
  routes() {}

  sockets() {
    this.io.on("connection", (socket) => {
      socket.on("send-message", (payload) => {
        console.log(payload);
      });
    });
  }

  listen() {
    this.server.listen(this.PORT, () => {
      console.log(`app running on port ${this.PORT}`);
    });
  }
}

module.exports = Server;
