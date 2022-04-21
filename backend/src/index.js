const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const accountsRouter = require("../routes/accountsRoute");
const projectsRouter = require("../routes/projectsRoute");
const pagesRouter = require("../routes/pagesRoute");
const authRouter = require("../routes/authRoute");
const templateRouter = require("../routes/templateRoute");
const viewPageRouter = require("../routes/viewPageRoute");
const axios = require("axios");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const options = {
  inflate: true,
  limit: "16mb",
};

dotenv.config();

app.use(cors(corsOptions));

app.use(helmet());

app.use(morgan("combined"));

app.use(express.json(options));

app.use(express.static(path.join(__dirname, "assets")));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/accounts", accountsRouter);
app.use("/projects", projectsRouter);
app.use("/templates", templateRouter);
app.use("/pages", pagesRouter);
app.use("/auth", authRouter);
app.use("/viewpage", viewPageRouter);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.get("/viewpage/page/:pageId", (req, res) => {
  let pageId = req.params.pageId;
  axios.get("http://localhost:5000/viewpage/getpage/" + pageId).then((resp) => {
    let doc = resp.data;
    let obj = {
      title: doc.pageTitle,
      styles: `<style>${doc.gjscss}</style>`,
      content: doc.gjshtml,
    };
    console.log(obj);
    res.render("index", {
      output: obj,
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
