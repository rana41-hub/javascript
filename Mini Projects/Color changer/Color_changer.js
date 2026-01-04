const body = document.querySelector("body");

let bg = "white";

const grey = document.querySelector("#grey");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");

grey.onclick = (() => {

  if (bg === "white" || bg === "blue" || bg === "yellow") {

    body.style.backgroundColor = "grey";

    bg = "grey";

  }
});

white.onclick = (() => {

  if (bg === "grey" || bg === "blue" || bg === "yellow") {

    body.style.backgroundColor = "white";

    bg = "white";

  }
});

blue.onclick = (() => {

  if (bg === "white" || bg === "grey" || bg === "yellow") {

    body.style.backgroundColor = "blue";

    bg = "blue";

  }
});

yellow.onclick = (() => {

  if (bg === "white" || bg === "blue" || bg === "grey") {

    body.style.backgroundColor = "yellow";

    bg = "yellow";

  }
});