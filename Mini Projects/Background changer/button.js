let button = document.querySelector("#toggle");

let bg = "light";

button.onclick = (() => {

  if(bg === "light") {

    document.querySelector("body").style.backgroundColor = "black";
    bg = "dark";
  }

  else {

    document.querySelector("body").style.backgroundColor = "white";
    bg = "light";
  }
});