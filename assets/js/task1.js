"use strict";
let array1;
array1 = [10, 20, 30, 48, -50, -9, 4, 0, 0, -3];
let i;
for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
console.log("Length=" + array1.length);
for (i = 0; i < array1.length; i++) {
  if (array1[i] < 0) {
    console.log("Отрицательный " + "элемент №" + i + " = " + array1[i]);
  }
}
let qZero = 0;
for (i = 0; i < array1.length; i++) {
  if (array1[i] == 0) {
    qZero++;
    console.log("Нулевой " + "элемент №" + i + " = " + array1[i]);
  }
}
console.log("Количество нулевых элементов = " + qZero);

for (i = 0; i < array1.length; i++) {
  if (array1[i] % 2 == 0) {
    console.log("Четный " + "элемент №" + i + " = " + array1[i]);
  }
}

for (i = 0; i < array1.length; i = i + 2) {
  console.log("Четный " + "индекс элемент №" + i + " = " + array1[i]);
}

let sum, max, min;
sum = 0;
for (i = 0; i < array1.length; i++) {
  sum += array1[i];
}
console.log("Сумма элементов массива = " + sum);

sum = 0;
for (i = 0; i < array1.length; i++) {
  if (array1[i] < 0) {
    sum += array1[i];
  }
}
console.log("Сумма отрицательных элементов массива = " + sum);

console.log(array1);
for (i = 0; i < array1.length; i++) {
  if (array1[i] == 0) {
    array1[i] = 100;
  }
}
console.log(array1);

for (i = 0; i < array1.length; i++) {
  if (array1[i] < 0) {
    array1[i] *= 2;
  } else {
    array1[i] = parseInt(array1[i] / 3);
  }
}
console.log(array1);

let array2 = [];
for (i = 0; i < array1.length - 1; i++) {
  array2[i] = array1[i] + array1[i + 1];
}
console.log(array2);
max = array2[0];
for (i = 1; i < array2.length; i++) {
  if (array2[i] > max) {
    max = array2[i];
  }
}

console.log("Максимальная пара = " + max);

console.log(array1.join("\n"));
console.log(array1.reverse());
console.log(array1.sort());
