import axios from "axios";
// import toSnakeCase from "./utils/toSnakeCase";
// import toCamelCase from "./utils/toCamelCase";
const instance = axios.create({
  baseURL: "http://webdev.ung.uz/api",
});

// instance.interceptors.request.use((config) => toSnakeCase(config));

// instance.interceptors.response.use((response) => toCamelCase(response));

export default instance;
