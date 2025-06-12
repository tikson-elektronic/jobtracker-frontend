import axios from "axios";

export default axios.create({
  baseURL: "http://your_backend_server:PORT/api", // Set your backend API URL here
});
