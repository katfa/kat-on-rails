function FloatingCircle(params) {
  var circle = params.circle;
  var container = params.container;
  var stopButton = params.stopButton;
  stopButton.addEventListener("click", stopMoving, false);
  var left = 0, top = 0, bottom = 0;
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;

  var movements = [moveLeft, moveRight, moveUp, moveDown];
  var randomNumber = function() { return Math.floor(Math.random() * 4) };
  console.log(randomNumber);

  var interval = setInterval(movements[randomNumber()], 10);

  function changeDirection() {
    console.log("changing direction");
    clearInterval(interval);
    console.log("interval cleared");

    interval = setInterval(movements[randomNumber()], 10);
  }

  function moveLeft() {
    if(left != containerWidth - 54) {
      console.log("moving left");
      left+=2;
      circle.style.marginLeft = left + "px";     
    } else {
      changeDirection();
    }
  }

  function moveRight() {
    if(left != 0) {
      console.log("moving right");
      left-=2;
      circle.style.marginLeft = left + "px";   
    } else {
      changeDirection();
    }
  }

  function moveUp() {
    if(top != 0) {
      console.log("moving up");
      top-=2;
      circle.style.marginTop = top + "px";   
    } else {
      changeDirection();
    }
  }

  function moveDown() {
    if(top != containerHeight - 54) {
      console.log("moving down");
      top+=2;
      circle.style.marginTop = top + "px";   
    } else {
      changeDirection();
    }
  }

  function stopMoving() {
    console.log("button clicked");
    clearInterval(interval);
  }
}