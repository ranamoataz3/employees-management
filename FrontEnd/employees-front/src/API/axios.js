import axios from "axios";

const url = "http://localhost:3005";

let token = "";
let id = "";

let instance = "";

instance = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    Authorization: "Bearer " + token,
    ID: id,
  },
});


export default instance;