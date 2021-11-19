const express = require("express");
const dbU = require("../src/db/crudUsers");
const router = express.Router();

router.get("/:id", function (req, res) {
    const id = req.params.id;
    dbU.getUser(id, function (user) {
      res.json(user);
    });
});
  
router.post("/", (req, res)=>{
    const user = req.body;
    dbU.addUser(user, function (response) {
      res.send(response);
    });
})
  
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;
    dbU.updateUserTotally(id, user, function (response) {
      res.send(response);
    });
});
  
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    dbU.deleteUser(id, function (response) {
      res.send(response);
    });
});

module.exports = router;