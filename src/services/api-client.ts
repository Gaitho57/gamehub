import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5c1f7ac2af64ee3a25580ff3381ba50",
  },
});
