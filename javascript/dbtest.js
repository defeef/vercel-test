require("dotenv").config();
const express = require("express");
const session = require("express-session");

import { initThinBackend, ensureIsUser, getCurrentUser } from "/node_modules/thin-backend";

const port = 3000;
const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

initThinBackend({
  host: `${BACKEND_URL}`
});

const user = getCurrentUser();

let email = user.email;
let name = user.name;

console.log(user);

window.onload = function() {
  // Buttons
  var button_holder = document.getElementsByClassName("button-holder")[0];



  let btn = document.createElement("button");
  btn.textContent = "Return to Home";
  btn.id = "btn1";
  btn.classList.add("btn");
  //button_holder.getElementsByClassName("return").appendChild(btn);
}
