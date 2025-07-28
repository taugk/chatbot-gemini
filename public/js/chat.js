const socket = io();
const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = messageInput.value.trim();
  if (!msg) return;

  // Tampilkan pesan user
  appendMessage("🧑 Kamu", msg);
  socket.emit("userMessage", msg);
  messageInput.value = "";
});

socket.on("botReply", (reply) => {
  appendMessage("🤖 Bot", reply);
});

function appendMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
