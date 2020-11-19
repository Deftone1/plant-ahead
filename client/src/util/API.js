import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

const savePlant =(plantData) => axios.post("/api/plants/", plantData)

const removeplantbyid = (id) => axios.delete("/api/plants/" +id)

const getPlantbyuserid = (id) => axios.get("api/plants/user/"+id)
// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const trefle = (plant) => axios.get("/api/protected/trefle/" +plant)

const API = { getProtectedExample, getPublicExample, trefle, savePlant, getPlantbyuserid, removeplantbyid };

export default API;
