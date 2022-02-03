let res = document.querySelector("#res");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btnClr = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");
let btns = document.querySelector("#btns");

let disp = "";
let arr = [];

btns.addEventListener("click", (e) => {
  if (e.target.id === "btn0") {
    disp += 0;
  } else if (e.target.id === "btn1") {
    disp += 1;
  } else if (e.target.id === "btnClr") {
    disp = "";
  } else if (e.target.id === "btnSum") {
    disp += "+";
  } else if (e.target.id === "btnSub") {
    disp += "-";
  } else if (e.target.id === "btnMul") {
    disp += "*";
  } else if (e.target.id === "btnDiv") {
    disp += "/";
  }

  res.innerHTML = disp;
});

btnEql.addEventListener("click", () => {
  let regx = /\+|-|\*|\//;
  let doWhat = disp.match(regx);

  arr = disp.split(regx);
  let num1 = parseInt(arr[0], 2);
  let num2 = parseInt(arr[1], 2);
  let result = eval(num1 + doWhat + num2).toString(2);
  disp = result;
});
