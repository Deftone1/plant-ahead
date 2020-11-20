import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

const savePlant =(plantData) => axios.post("/api/plants/", plantData)

const getplantbyid = (id) => axios.get("api/plants/"+id)

const removeplantbyid = (id) => axios.delete("/api/plants/" +id)

const getPlantbyuserid = (id) => axios.get("api/plants/user/"+id)
// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const createGarden=(gardendata) => axios.post("/api/gardens", gardendata)

const trefle = (plant) => axios.get("/api/protected/trefle/" +plant)

const savePlanttoGarden = (gardenid, plantid) => axios.put("/api/gardens/addplant/"+gardenid+"/"+plantid)
const deletePlantfromGarden = (gardenid, plantid) => axios.put("/api/gardens/removeplant/"+gardenid+"/"+plantid)

const getgardenbyid = (id) => axios.get("/api/gardens/" + id)

const deletegardenbyid = (id) => axios.delete("/api/gardens/"+id)
const getgardenbyuserid = (id) => axios.get("/api/gardens/user/"+id)

const clearplantsbyuserid = (id) => axios.delete("api/plants/user/"+id)
const API = {deletePlantfromGarden, getgardenbyid, getProtectedExample, getPublicExample, trefle, savePlant, getPlantbyuserid, removeplantbyid, createGarden, getgardenbyuserid, savePlanttoGarden, getplantbyid, deletegardenbyid, clearplantsbyuserid};

export default API;
