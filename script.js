window.onload = function() {
  console.log("Test");
  let btn = document.createElement("button");
  btn.onclick = function() {
    console.log("Button Start")
    var audio = new Audio("jumpscare.mp3");
    audio.play();
    console.log("Button End")
  }
  btn.innerHTML = "Click Me";
  document.body.appendChild(btn);
}
