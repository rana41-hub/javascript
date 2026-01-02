let box1 = document.querySelector("#box1");
let hover1 = "white";

box1.onmouseover = () => {
  if (hover1 === "white") {
    document.body.style.backgroundColor = "black";
    hover1 = "black";
  } else {
    document.body.style.backgroundColor = "white";
    hover1 = "white";
  }
};

let box2 = document.querySelector("#box2");
let hover2 = "white";

box2.onmouseover = () => {
  if (hover2 === "white") {
    document.body.style.backgroundColor = "yellow";
    hover2 = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
    hover2 = "white";
  }
};

let box3 = document.querySelector("#box3");
let hover3 = "white";

box3.onmouseover = () => {
  if (hover3 === "white") {
    document.body.style.backgroundColor = "pink";
    hover3 = "pink";
  } else {
    document.body.style.backgroundColor = "white";
    hover3 = "white";
  }
};