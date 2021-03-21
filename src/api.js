import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "94823eed02c7a9f74b6d079ad7329685",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
