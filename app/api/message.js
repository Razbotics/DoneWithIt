import client from "./client";

const endpoint = "/messages";

const sendMessage = (message) => client.post(endpoint, message);
const getMessages = () => client.get(endpoint);
const deleteMessage = (messageId) => client.delete(endpoint + "/" + messageId);

export default {
  sendMessage,
  getMessages,
  deleteMessage,
};
