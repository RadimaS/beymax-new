const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Universities = require("./models/universities");

app.set("view engine", "ejs");

const PORT = 3000;
const db =
  "mongodb+srv://radima:55256636qQ.@cluster0.xxtq4.mongodb.net/beymax-data?retryWrites=true&w=majority";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to db"))
  .catch((error) => console.log(error));

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port${PORT}`);
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
    .then((universities) =>
      res.render(createPath("chgu"), { universities, link })
    )
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});

// app.get("/chgu", (req, res) => {
//   const img = "/chgu-logo.png";
//   const link = "main";
//   Universities.find()
//     .then((universities) =>
//       res.render(createPath("chgu"), {
//         universities,
//         img,
//         link,
//       })
//     )
//     .catch(
//       (error) => console.log(error),
//       res.render(createPath("error"), { title: "Error" })
//     );
// });


app.get("/philological", (req, res) => {
  const link = "main/6275c5facc5daa1d171e92ca";
  const title = "Филологический факультет";
  const img = "/chgu-logo.png";
  res.render(createPath("philological"), { title, img, link });
});

app.get("/lecture", (req, res) => {
  const link = "philological";
  const title = "Ознакомление";
  const img = "/chgu-logo.png";
  res.render(createPath("lecture"), { link, title, img });
});

app.use((req, res) => {
  res.status(404).render(createPath("error"));
});
