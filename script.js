"use strict";

function study(data) {
  let string = "";
  if (typeof data !== "string") {
    console.log("Это не строка!!!");
  } else if (typeof data === "string") {
    if (data.length > 30) {
      string = data.substr(0, 30) + "...";
    } else {
      string = data;
    }
  }
  return string;
}

console.log(study());
console.log(study("Сколько здесь символов??"));
console.log(study("Ну в этой строке, сивмолов должно быть "));
