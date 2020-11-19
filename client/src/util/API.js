import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

const savePlant =(plantData) => axios.post("/api/plants/", plantData)
// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const trefle = (plant) => axios.get("/api/protected/trefle/" +plant)

const API = { getProtectedExample, getPublicExample, trefle, savePlant };

export default API;
