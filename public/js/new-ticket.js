/*
 *REFERENCIAS DEL HTML
 */
const lblNewTicket = document.querySelector('#lblNewTicket');
const btnCreate = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
  console.log('conectado');
  btnCreate.disabled = false;
});

socket.on('last-ticket', (ticket) => {
  lblNewTicket.innerText = 'Ticket ' + ticket;
});

socket.on('disconnect', () => {
  console.log('desconectado');
  btnCreate.disabled = true;
});

btnCreate.addEventListener('click', () => {
  socket.emit('next-ticket', null, (ticket) => {
    lblNewTicket.innerText = ticket;
  });
});
