'use strict';

const week = [ 'понед', 'вторник', 'среда', 'четверг', 'пятница', 'сб','вс'];
let date = new Date().getDay() ;
let arr = [];

week.forEach((el, i) => {
  arr.push(el);
  if (el === 'сб' || el === 'вс') {
    arr[i] = el.italics();
  }
  if (date === (i - 6) && el === 'вс') {
    arr[i] = el.italics().bold();
  }
});


document.write(arr.join(' --- '));