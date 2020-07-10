/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");

  carousel.setAttribute("class", "carousel");
  img1.setAttribute(
    "src",
    "/Users/isaacgorman/Desktop/dev/web-sprint-challenge-applied-javascript/assets/bones.jpg"
  );
  img2.setAttribute(
    "src",
    "/Users/isaacgorman/Desktop/dev/web-sprint-challenge-applied-javascript/assets/bones.jpg"
  );
  img3.setAttribute(
    "src",
    "/Users/isaacgorman/Desktop/dev/web-sprint-challenge-applied-javascript/assets/bones.jpg"
  );
  img4.setAttribute(
    "src",
    "/Users/isaacgorman/Desktop/dev/web-sprint-challenge-applied-javascript/assets/bones.jpg"
  );
  leftButton.setAttribute("class", "left-button");
  rightButton.setAttribute("class", "right-button");

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  // carousel-container
  const carouselContainer = document.querySelector(".carousel-container");

  return carouselContainer.append(carousel);
}

Carousel();
