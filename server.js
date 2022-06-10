const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const Universities = require("./models/universities");
const Faculties = require("./models/faculties");
const Directions = require("./models/directions");
const GetDirections = require("./models/getdirections");
const Subjects = require("./models/subjects");
const Lecture = require("./models/lectures");
 
app.set("view engine", "ejs");
 
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected to db"))
  .catch((error) => console.log(error));
 
const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);
 
app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`listening port ${process.env.PORT}`);
});
 
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
 
app.use(express.static("fonts"));
app.use(express.static("js"));
app.use(express.static("img"));
app.use(express.static("css"));
app.use(express.static("sass"));
app.use(express.static("modules"));
 
app.get("/", (req, res) => {
  const title = "Beymax";
  const img = "/favicon.png";
  res.render(createPath("index"), { title, img });
});
 
app.get("/main", (req, res) => {
  const title = "Главная";
  const link = "/";
  const img = "/favicon.png";
  Universities.find()
    .sort({ createdAt: -1 })
    .then((universities) =>
      res.render(createPath("main"), { universities, title, link, img })
    )
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});
 
app.get("/main/:id", (req, res) => {
  const link = "/main";
  Universities.findById(req.params.id)
    .populate("faculties")
    .then((university) =>
      res.render(createPath("university"), {
        university,
        link,
        title: university.title,
        img: university.img,
      })
    )
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});
 
app.get("/directions/:id", (req, res) => {
  const link = "/main";
  const img = "/favicon.png";
  const title = "Направления  подготовки";
 
  Faculties.findById(req.params.id)
    .populate({path: "getdirections", populate: {
      path: "subjects",
 
    }})
    .then((faculty) => {
          return res.render(createPath("directions"), {
            faculty,
            link,
            title,
            img,
          })
        }
    )
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});
 
app.get("/subjects/:id", (req, res) => {
  const link = "/main";
  const img = "/favicon.png";
  Subjects.findById(req.params.id)
    .populate("lectures")
    .then((subject) =>
      res.render(createPath("lecture"), {
        subject,
        link,
        title: subject.title,
 
        img,
      })
    )
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});
 
app.get("/lecture", (req, res) => {
  const link = "/main";
  const title = "Ознакомление";
  const img = "/favicon.png";
  res.render(createPath("lecture"), { link, title, img });
});
 
app.use((req, res) => {
  res.status(404).render(createPath("error"));
});