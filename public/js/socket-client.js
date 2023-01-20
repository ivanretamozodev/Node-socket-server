//DOM REFERS
const lblOnline = document.querySelector("#lblOnline");
const lblOfline = document.querySelector("#lblOfline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const socket = io();

socket.on("connect", () => {
  lblOfline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOnline.style.display = "none";
  lblOfline.style.display = "";
});

socket.on("send-message", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "asdsdka9sd",
    date: new Date().getTime(),
  };
  socket.emit("send-message", payload, (id) => {
    console.log("desde el server", id);
  });
});
