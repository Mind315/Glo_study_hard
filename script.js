let lang = "ru";
if (lang === "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресение"
  );
} else if (lang === "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
}

switch (lang) {
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресение"
    );
    break;
}

let langArr = {
   'ru': ['Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
   'en': ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

};
 

let namePerson = 'Артем';
let result = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(result);