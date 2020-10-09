import client from "./client";

const sendMessage = (message) => client.post("/messages", message);
const getMessages = (user) => client.get("/messages", user);

export default {
  sendMessage,
  getMessages,
};
