const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const app = express(); //fqUD3H2NbabyXGCM
app.use(cors());

//Import des routes
const comicsRoute = require("./routes/comics-route");
const charactersRoute = require("./routes/characters-route");


// Appel des routes
app.use(comicsRoute);
app.use(charactersRoute);


app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API MARVEL" });
});



app.all("*", function (req, res) {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3001, () => {
  console.log("server started");
});
