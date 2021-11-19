const express = require("express");
const axios = require("axios").default;
const dbE = require("../src/db/crudExperts.js");
const router = express.Router();

router.get("/", function (req, res) {
    dbE.getExperts(function (arrayExperts) {
      res.send(arrayExperts);
    });
});
  
router.get("/:id", function (req, res) {
    const id = req.params.id;
    dbE.getExpert(id, function (expert) {
      res.json(expert);
    });
});
  
router.post("/", (req, res) => {
    const expert = req.body;
    const country = expert.Location;
    axios.get("https://restcountries.com/v3.1/name/"+country)
    .then(function (response) {
      expert.languages = response.data[0].languages;
    })
    .catch(function (error) {
      res.status(404).send("Error to get country");
    })
    .then(function () {
      dbE.addExpert(expert, function (response) {
          if(response == "Expert created"){
            res.status(201).send(response);
          }else{
              res.status(400).send(response);
          }
      });
    });
});
  
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const expert = req.body;
    dbE.updateExpertTotally(id, expert, function (response) {
      res.send(response);
    });
});
  
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const expert = req.body;
    dbE.updateExpertPartial(id, expert, function (response) {
      res.send(response);
    });
});
  
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    dbE.deleteExpert(id, function (response) {
      res.send(response);
    });
});

module.exports = router;