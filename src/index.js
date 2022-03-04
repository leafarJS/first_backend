const express = require("express");
const path = require("path");
require("colors");
const app = express();

//settings
const hostname = "127.0.0.1";
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
//middlewares

// routes
app.get("/", (req, res) => {
  res.render("index.html", { title: "First Webside" });
});
app.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact Page" });
});
//static file
app.use(express.static(path.join(__dirname, "public")));
//escuchando el servidor
app.listen(app.get("port"), hostname, () => {
  console.log(
    `El servidor se está ejecutando en http://${hostname}:${app.get("port")}/`
      .cyan
  );
});
