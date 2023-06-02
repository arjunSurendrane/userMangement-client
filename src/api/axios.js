import axios from "axios";

export const url = "http://localhost:3001/api/v1";

const instance = axios.create({
  baseURL: url,
});

export default instance;
