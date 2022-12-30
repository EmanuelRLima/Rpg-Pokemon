import axios from "axios";
import router from "./router";

const getAPI = axios.create({
  baseURL: "http://testeaws.smartlegis.net.br/api/",
  timeout: 60000,
});
const AxiosAPI = axios.create({
  baseURL: "http://testeaws.smartlegis.net.br/api/", //http://54.91.78.222/api/
  timeout: 60000,
});

/* interceptors */
getAPI.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      router.push({ name: "Login" });
    }

    // return Error object with Promise
    return Promise.reject(error);
  }
);



export { getAPI, AxiosAPI};
