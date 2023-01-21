const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketControllers = (socket) => {
  socket.on("send-message", (payload, callback) => {
    const id = 12345;
    callback(id);
    socket.broadcast.emit("send-message", payload);
  });
};

module.exports = { socketControllers };
