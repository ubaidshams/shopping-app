import axios from "axios";


//creating Axios instance

export default axios.create({
  baseURL: " Base URL: localhost:8080/",
  headers: {
    "content-type": "application/json",
  },
});