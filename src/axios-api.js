import axios from "axios";

const getAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  //baseURL: "http://localhost:8000/api/",
  timeout: 60000,
});

export { getAPI };
