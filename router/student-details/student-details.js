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
      res.send(data);
    }
  );

  var options = rootPath("public/school/studentDetails");
  var fileName = "studentDetails.json";
  //   res.sendFile(fileName, options, (err) => {
  //     console.log(err, "err");
  //     if (err) {
  //       next(err);
  //     } else {
  //       console.log("Sent:", fileName);
  //     }
  //   });
});

module.exports = router;
