const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketControllers = (socket) => {
  socket.emit('last-ticket', ticketControl.last);
  socket.on('next-ticket', (payload, callback) => {
    const next = ticketControl.nextTicket();
    callback(next);
  });
};

module.exports = { socketControllers };
