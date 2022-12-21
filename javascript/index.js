let web_root = "https://vercel-test-defeef.vercel.app/";

window.onload = function() {
  // Buttons
  var button_holder = document.getElementsByClassName("button-holder")[0];

  let btn = document.createElement("button");
  btn.onclick = function() {
    var audio = new Audio("jumpscare.mp3");
    audio.play();
  }
  btn.textContent = "Click Me";
  btn.id = "btn1";
  btn.setAttribute("type", "button");
  btn.classList.add("btn");
  button_holder.appendChild(btn);
  
  let btn2 = document.createElement("button2");
  btn2.onclick = function() {
    console.log("Button Start");
    let video = document.getElementById("glitch-video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    console.log("Button End")
  }
  btn2.textContent = "Click Me Too";
  btn2.id = "btn2";
  btn2.setAttribute("type", "button");
  btn2.classList.add("btn");
  button_holder.appendChild(btn2);

  let btn3 = document.createElement("button3");
  btn3.onclick = function() {
    window.location.href = "html/about.html";
  }
  btn3.textContent = "Click Me For Info";
  btn3.id = "btn3";
  btn3.classList.add("btn");
  button_holder.appendChild(btn3);

  let btn4 = document.createElement("button4");
  btn4.onclick = function() {
    window.location.href = "html/dbtest.html";
  }
  btn4.textContent = "Click Me to Access the Database";
  btn4.id = "btn4";
  btn4.classList.add("btn");
  button_holder.appendChild(btn4);
}
