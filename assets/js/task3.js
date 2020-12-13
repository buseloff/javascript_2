"use strict";
//------------------------------------
function SayHello1() {
  console.log("Hello, user!!!!");
  document.writeln("<p> Hello!!!</p>");
}
SayHello1();
//------------------------------------
function SayHello2(userName) {
  console.log(`Hello, ${userName}!!!!`);
}

let user1 = "Vasya";
let user2 = "Tanya";
SayHello2(user1);
SayHello2(user2);
//------------------------------------
MySum(1500, 5000);

function MySum(x, y) {
  let sum = x + y;
  console.log(`Сумма = ${sum}`);
}

MySum(2, 2);
//------------------------------------
function FunLine(symbolLine, n) {
  let str = "";
  while (n > 0) {
    str += symbolLine;
    n--;
    console.log(str);
  }
}

FunLine("&", 35);
//------------------------------------

function MySum2(x, y) {
  return x + y;
}

let res = MySum2(56, 56);
console.log(`Result is ${res}`);

//------------------------------------

function SumOfNumbers(x1, x2, step) {
  let sum = 0;

  for (x1; x1 <= x2; x1 += step) {
    sum += x1;
  }
  return sum;
}

console.log(SumOfNumbers(500, 600, 5));

//------------------------------------

function SumOfNumbers2(x1, x2, step = 10) {
  let sum = 0;

  for (x1; x1 <= x2; x1 += step) {
    sum += x1;
  }
  return sum;
}

console.log(SumOfNumbers2(500, 600, 20));
