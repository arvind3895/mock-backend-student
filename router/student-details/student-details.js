var express = require("express");
var router = express.Router();
var rootPath = require("../../util");
fs = require("fs");
const Joi = require('joi');
const querystring = require('querystring');

const schema = Joi.object().keys({
  Id: Joi.number().integer(),
  RegestrationNo: Joi.string(),
  Name: Joi.string().min(3).required(),
  Class: Joi.string().required(),
  Division: Joi.string().required(),
  Rank: Joi.number().integer().required(),
  Fee: Joi.number().integer().required(),
  DueDate: Joi.date().required(),
  ContactNo: Joi.number().integer().min(1000000000).max(9999999999).required(),
  Address: Joi.string().required()
});

router.get("/school/student-details", (req, res) => {
  fs.readFile(
    "public/school/studentDetails/studentDetails.json",
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      if(req.query.id) {
        const user = (JSON.parse(data)).find(student => student.Id === parseInt(req.query.id));
        if(!user) {
          return res.status(400).send({message: "No Students record found"});
        }
        res.status(200).send(user);
      }
      else {
        res.status(200).send(JSON.parse(data));
      }
    }
  );

  var options = rootPath("public/school/studentDetails");
  var fileName = "studentDetails.json";
});

router.post("/student-details", (req, res) => {
  let studentList;
  const { error } = validateStudent(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }
  fs.readFile(
    "public/school/studentDetails/studentDetails.json",
    "utf8",
    function (err, data) {
      studentList = JSON.parse(data);
      if (err) {
        return console.log(err);
      }
        const index = (JSON.parse(data)).findIndex(student => student.Id == req.body.Id);
        if(index < 0) return res.status(400).send({message: "No data available"})
        studentList[index] = req.body;
        fs.writeFile('public/school/studentDetails/studentDetails.json', JSON.stringify(studentList) , err => {
          if (err) {
              return console.log(err);
          }
          fs.readFile('public/school/studentDetails/studentDetails.json', "utf8", (err, data) => {
              if (err) {
                  return console.log(err);
              }
              res.status(200).send(JSON.parse(data));
          });
      });
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
        return res.status(400).send({error: 'Invalid UserName or password'});
      }
      return res.status(200).send({message: 'Successfully loggedin',...loginCred})
    });
  });

  router.post('/addUser', (req, res) => {
    const newUser = req.body;
    var users;
    var userData;
    if (req.body === '') {
        return res.status(400).send({message: 'Invalid body data'});
    }
    fs.readFile('public/school/studentDetails/users.json', "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        users = JSON.parse(data);

        userData = users.find(user => {
            if(newUser.name === user.name || newUser.email === user.email) {
                return true;
            }
        });

        if(userData) {
            return res.status(400).send({error: 'User name / email already exists'});
        }
        
        users.push(newUser);

        fs.writeFile('public/school/studentDetails/users.json', JSON.stringify(users) , err => {
            if (err) {
                return console.log(err);
            }
            fs.readFile('public/school/studentDetails/users.json', "utf8", (err, data) => {
                if (err) {
                    return console.log(err);
                }
                res.status(200).send(JSON.parse(data));
            });
        })
    });
    
});

router.put('/changePassword', (req,res) => {
  const newRequest = req.body;
  var userDetails;
  if (req.body === '') res.status(400).send({message: 'Invalid body data'});
  fs.readFile('public/school/studentDetails/users.json', (err, data) => {
      if (err) return console.log(err);
      userDetails = JSON.parse(data);
      const index = userDetails.findIndex(user => user.email === newRequest.email);
      if (index < 0) return res.status(400).send({message: "Invalid email address"});
      userDetails[index].password = newRequest.password;
      fs.writeFile('public/school/studentDetails/users.json', JSON.stringify(userDetails) , err => {
          if (err) {
              return console.log(err);
          }
          fs.readFile('public/school/studentDetails/users.json', "utf8", (err, data) => {
              if (err) {
                  return console.log(err);
              }
              res.status(200).send(JSON.parse(data));
          });
      });
  });
});

router.delete('/removeUser', (req,res) => {
  const newRequest = req.body;
  var userDetails;
  if (req.body === '') res.status(400).send({message: 'Invalid body data'});
  fs.readFile('public/school/studentDetails/users.json', (err, data) => {
      if (err) return console.log(err);
      userDetails = JSON.parse(data);
      const index = userDetails.findIndex(user => user.email === newRequest.email);
      if (index < 0) res.status(400).send({message: 'User not exists'});
      userDetails.splice(index, 1);
      fs.writeFile('public/school/studentDetails/users.json', JSON.stringify(userDetails) , err => {
          if (err) {
              return console.log(err);
          }
          fs.readFile('public/school/studentDetails/users.json', "utf8", (err, data) => {
              if (err) {
                  return console.log(err);
              }
              res.status(200).send(JSON.parse(data));
          });
      })
  })
});

function validateStudent(student) {
  return Joi.validate(student, schema);
}

module.exports = router;
