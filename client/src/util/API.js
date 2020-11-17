import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const trefle = (plant) => axios.get("/api/protected/trefle/" +plant)

const API = { getProtectedExample, getPublicExample, trefle };

export default API;
