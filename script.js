let num = 266219;

num = String(num); //превратил в строку.
console.log(typeof num);
let result = 1;
for (let i = 0; i < num.length; i++) {
   result = result * num[i];

}
console.log(result);// вывел произведение чисел

let a = result ** 3;
console.log(String(a).substr(0,2));