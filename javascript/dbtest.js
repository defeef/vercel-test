import { initThinBackend, ensureIsUser, getCurrentUser } from "node_modules/thin-backend";

initThinBackend({
  host: "${BACKEND_URL}"
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
