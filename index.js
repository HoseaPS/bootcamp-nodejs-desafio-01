const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(
  express.urlencoded({
    extended: false
  })
);
app.set("view engine", "njk");

const queryParamCheck = (req, res, next) => {
  if (!req.query.age) {
    return res.redirect("/");
  } else {
    return next();
  }
};

app.get("/", (req, res) => {
  return res.render("form");
});

app.post("/check", (req, res) => {
  if (req.body.age >= 18) {
    return res.redirect(`/major?age=${req.body.age}`);
  } else {
    return res.redirect(`/minor?age=${req.body.age}`);
  }
});

app.get("/major", queryParamCheck, (req, res) => {
  const age = req.query.age;
  return res.render("major", { age });
});

app.get("/minor", queryParamCheck, (req, res) => {
  const age = req.query.age;
  return res.render("minor", { age });
});

app.listen(3000);
