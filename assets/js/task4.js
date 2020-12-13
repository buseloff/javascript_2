"use strict";
function ReverseOrder(limit1, limit2) {
  console.log("Начальное значение = ", limit1);
  console.log("Конечное значение = ", limit2);
  console.log("В обратном порядке: ");
  for (limit2; limit2 >= limit1; limit2--) {
    console.log(limit2);
  }
}

ReverseOrder(5, 15);

function ReverseOrder2() {
  let userNumber = prompt("Введите число");
  let reverseNumber = "";
  console.log("Начальное значение = ", userNumber);
  console.log("В обратном порядке: ");
  for (let i = userNumber.length - 1; i >= 0; i--) {
    reverseNumber += userNumber.charAt(i);
  }
  console.log(reverseNumber);
}
ReverseOrder2();

//Посчитать сумму из второго задания

function ReverseOrderAndSum() {
  let userNumber2 = prompt("Введите число");
  console.log("Значение = ", userNumber2);
  let sum = 0;
  console.log("Сумма чисел: ");
  for (let i = 0; i < userNumber2.length; i++) {
    sum += parseInt(userNumber2.charAt(i));
  }
  console.log(sum);
}
ReverseOrderAndSum();

//Посчитать сумму четныъх эл массива
function SumOfArrayAddElements() {
  let userNumber2 = prompt("Введите число");
  console.log("Значение = ", userNumber2);
  let sum = 0;
  console.log("Сумма чисел: ");
  for (let i = 0; i < userNumber2.length; i++) {
    sum += parseInt(userNumber2.charAt(i));
  }
  console.log(sum);
}
ReverseOrderAndSum();

//2 массива вернуть массив без повторов
//перевод строки в регистр
