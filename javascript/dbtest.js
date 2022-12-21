import { initThinBackend, ensureIsUser, getCurrentUser } from 'thin-backend';

initThinBackend({
  host: "postgresql://HyHeefzPeljBxyrgvaQQodofjbqdlKon:EAJUmATatonjxLACSnOHPqmInXSbiYFc@db.thin.dev/5f17aaf2-5fa0-48e6-ac01-e66805146136"
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
