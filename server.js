require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const authController = require("./controllers/auth.controller");
const { handleErrors } = require("./middleware/error.middleware");
const { hasValidToken } = require("./middleware/auth.middleware");
const fetch = require("node-fetch")
const axios = require("axios")
const { json } = require("express");
const routes = require("./routes")
const db = require("./models");
//const plantsController = require("./controllers/plantsController");

if (!process.env.SERVER_SECRET) {
  // SERVER_SECRET env var is required for auth
  throw new Error("SERVER_SECRET is not set.");
}

const uri = process.env.MONGODB_URI || "mongodb://localhost/temp";
mongoose.connect(uri, { useNewUrlParser: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "client/build")));

// routing
app.post("/api/auth/login", authController.login);
app.post("/api/auth/signup", authController.signup);

// example of unprotected route. (guest users can access)
app.get("/api/unprotected", (req, res) => res.json({ message: "public data" }));

// example of a protected route. Request must have a valid token.


app.get("/api/protected", hasValidToken, (req,res) =>{
  db.User
      .findOne({ _id: req.user.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}
)
app.put("/api/protected", hasValidToken, (req,res) =>{
  db.User
      .findOneAndUpdate({ _id: req.user.id}, {profile:req.body.profile})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}
)



app.get("/api/protected/trefle/:tree",  (req, res) => {
  let tree = req.params.tree
  let results
(async () => {
  const response = await fetch("https://trefle.io/api/v1/plants/search?token="+process.env.TOKEN+"&q="+tree);
  
   results = await response.json();
   
	res.json(results.data)
})();
});

app.use(routes)

app.use(handleErrors);

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client/build/index.html"))
);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listening on ${port}`));
