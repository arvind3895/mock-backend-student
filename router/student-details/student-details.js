var express = require("express");
var router = express.Router();
var rootPath = require("../../util");
fs = require("fs");

router.get("/school/student-details", function (req, res) {
  fs.readFile(
    "public/school/studentDetails/studentDetails.json",
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      res.status(200).send(data);
    }
  );

  var options = rootPath("public/school/studentDetails");
  var fileName = "studentDetails.json";
});

router.get("/school/users", (req, res) => {
  fs.readFile("public/school/studentDetails/users.json",
  "utf8", (err,data) => {
    if(err) {
      return console.log(err);
    }
    res.status(200).send(data)
  });
});

router.post('/login', (req, res) => {
    const userDetail = req.body;
    fs.readFile("public/school/studentDetails/users.json",
    "utf8", (err,data) => {
      if(err) {
        return console.log(err);
      }
      const loginCred = (JSON.parse(data)).find(user => {
        if((user.name === userDetail.name || user.email === userDetail.email) && user.password === userDetail.password) {
          return true;
        }
      });

      if(!loginCred) {
        res.status(400).send({error: 'Invalid UserName or password'});
      }
      res.status(200).send({message: 'Successfully loggedin',...loginCred})
    });
  })

module.exports = router;
