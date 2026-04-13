let count = 0;

let btn = document.getElementById("no-btn");

//  store original position
let originalX = 0;
let originalY = 0;

let x = 10;
let y = -10;

btn.addEventListener("click", function () {
  count++;

  // move button
  x += 100;
  y += -100;

  btn.style.left = x + "px";
  btn.style.top = y + "px";

  // after 5 clicks
  if (count % 2 === 0) {
    alert("Single Hi Maarna Ha Kiya 😄");

    //  RESET POSITION
    x = originalX;
    y = originalY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
  }
});