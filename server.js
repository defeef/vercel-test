var express = require("express");
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
  });
})

app.get("/about", function(req, res) {
  res.render("pages/about.ejs");
});

app.listen(8080);
console.log("8080 is the magic port");
