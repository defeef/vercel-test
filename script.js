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
  btn.id = "btn"
  document.body.appendChild(btn);
  
  let btn2 = document.createElement("button");
  btn2.onclick = function() {
    console.log("Button Start")
    // Say stuff
    console.log("Button End")
  }
  btn2.innerHTML = "Click Me Too";
  btn2.id = "btn2"
  document.body.appendChild(btn);
}
