window.onload = function() {
  // Buttons
  var button_holder = document.getElementsByClassName("button-holder")[0];

  let btn = document.createElement("button");
  btn.textContent = "Return to Home";
  btn.id = "btn1";
  btn.classList.add("btn");
  button_holder.getElementsByClassName("return").appendChild(btn);
}
