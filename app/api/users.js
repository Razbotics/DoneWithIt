import client from "./client";

const register = (userInfo) => client.post("/users", userInfo);
const getUser = (userId) => client.get("/user/" + userId);

export default {
  register,
  getUser,
};
