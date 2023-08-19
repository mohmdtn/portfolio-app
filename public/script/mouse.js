const ball = document.querySelector("div.ball");
const footerY = document.querySelector("footer").getBoundingClientRect().top;

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.035;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (ballY >= footerY){
    ball.style.top = footerY + "px";
  }


  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;

  // if (mouseY > footerY){

  // }
  // else {
  //   ball.style.display = "inline-block";
  // }
});
