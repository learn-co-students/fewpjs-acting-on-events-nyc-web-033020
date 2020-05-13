// let btn = document.createElement("button")
// btn.setAttribute("id", "b1")
// btn.innerHTML = "Click Me Bro"

// let body = document.getElementsByTagName('body')[0]
// body.append(btn)

// btn.addEventListener("click", function() {
//     alert("The Office")
// })

// let dodger = document.getElementById('dodger')
// dodger.style.backgroundColor = "#FF69B4"
// btn.style.backgroundColor = "#FF69B4"
// dodger.style.left = "0px"

// let mover = document.getElementById('b1')
// b1.style.bottom = "180px"

// function moveDodgerLeft() {
//     let leftNumbers = b1.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       b1.style.left = `${left - 1}px`;
//     }
//   }

let dodger = document.getElementById("dodger")

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }

  document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })