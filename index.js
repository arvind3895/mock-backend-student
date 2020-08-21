const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const studentDetails = require("./router/student-details/student-details");

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/", studentDetails);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
