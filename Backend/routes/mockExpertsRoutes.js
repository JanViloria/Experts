const express = require("express");
const router = express.Router();
const expertsMockDB = require("./mockExperts.json");

router.get("/", function (req, res) {
    res.send(expertsMockDB);
});
  
router.get("/:id", function (req, res) {
    const id = req.params.id;
    var expert = expertsMockDB.filter(function(obj){
      return obj.id === id;
    })
    res.send(expert[0]);
});
  
router.post("/", (req, res) => {
    const expert = req.body;
    expert.id = (expertsMockDB.length+1) + "";
    expertsMockDB.push(expert);
    res.send("Expert created");
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