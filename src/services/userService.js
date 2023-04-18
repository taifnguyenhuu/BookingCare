import axios from "../axios";

const hanldeLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

export { hanldeLoginApi };
