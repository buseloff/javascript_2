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

FunLine("&", 5);
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
//------------------------------------

/*function FSum(x1, x2) {
  return x1 + x2;
}
function FSub(x1, x2) {
  return x1 - x2;
}
function FMult(x1, x2) {
  return x1 * x2;
}

function FDiv(x1, x2) {
  return x1 / x2;
}
let x1, x2, oper;
x1 = prompt("Введите операнд 1");
x2 = prompt("Введите операнд 2");
oper = prompt("Введите операцию / * + -");
console.log(oper);
console.log(x1, x2);
switch (oper) {
  case "+":
    console.log(FSum(x1, x2));
    break;

  case "-":
    console.log(FSub(x1, x2));
    break;

  case "*":
    console.log(FMult(x1, x2));
    break;

  case "/":
    console.log(FDiv(x1, x2));
    break;
  default:
    console.log("Вы неправильно ввели оператор!!!");
}*/
//------------------------------------
function MyPow(base, degree) {
  let i,
    res = 1;
  for (i = 1; i <= degree; i++) {
    res *= base;
  }
  return res;
}
console.log(MyPow(2, 5));

function MyPow2(base, degree) {
  if (degree == 1) {
    return base;
  } else {
    return base * MyPow2(base, degree - 1);
  }
}
console.log(MyPow2(2, 5));

function MySumRec(x, y) {
  if (x == y) {
    return x;
  }
  if (y == x + 1) {
    return x + y;
  }
  return x + y + MySumRec(x + 1, y - 1);
}
console.log(MySumRec(2, 4));
//------------------------------------
//1 type function definition
console.log(FUN(2, 3));
function FUN(a, b) {
  return a + b;
}
//2 type function expression
const SUM_FUN = function (a, b) {
  return a + b;
};
console.log(SUM_FUN(2, 3));

//3 type array function
const sumArrayFun = (a, b) => {
  return a + b;
};
console.log(sumArrayFun(2, 2));
const numPow = (x) => x * x;

console.log(numPow(5));
