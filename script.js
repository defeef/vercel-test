window.onload = function() {
  console.log("Test");
  let btn = document.createElement("button");
  btn.onclick = function() {
    var audio = new Audio("jumpscare.mp3");
    audio.play();
  }
  btn.innerHTML = "Click Me";
  document.body.appendChild(btn);
}
