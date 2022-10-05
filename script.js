window.onload = function() {
  console.log("Test");
  var button_holder = document.getElementsByClassName("button-holder")[0];

  let btn = document.createElement("button");
  btn.onclick = function() {
    var audio = new Audio("jumpscare.mp3");
    audio.play();
  }
  btn.textContent = "Click Me";
  btn.id = "btn1";
  button_holder.appendChild(btn);
  
  let btn2 = document.createElement("button2");
  btn2.onclick = function() {
    console.log("Button Start")
    // Say stuff
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello World";
    window.speechSynthesis.speak(msg);
    //
    console.log("Button End")
  }
  btn2.textContent = "Click Me Too";
  btn2.id = "btn2"
  button_holder.appendChild(btn2);
}
