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
  let btn2 = document.createElement("button2");
  btn2.onclick = function() {
    console.log("Button Start")
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello World";
    window.speechSynthesis.speak(msg);
    console.log("Button End")
  }
  btn2.innerHTML = "Click Me";
  document.body.appendChild(btn2);
}
