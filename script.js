"use strict";

let btn = document.querySelector(".btn"),
  colorValue = document.querySelector(".colorValue"),
  body = document.querySelector(".body");

btn.addEventListener("click", function () {
  let color = "#" + (Math.random().toString(16) + "000000").substring(2, 8);
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
