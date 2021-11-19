const APIRoutes = require("./routes");
const express = require("express");
const app = express();
const db = require("./src/db/firebase.js");

app.use(express.static('public'));
app.use(express.json());

APIRoutes(app);

app.listen(3000);
