// Your code here
let dodger = document.getElementById("dodger");
let gameDiv = document.querySelector("#game")

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        console.log(e.key)
      moveDodgerLeft();
    }
  });


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        console.log(e.key)
      moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

