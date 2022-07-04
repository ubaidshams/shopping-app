import axios from "axios";


//creating Axios instance

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "content-type": "application/json",
  },
});

