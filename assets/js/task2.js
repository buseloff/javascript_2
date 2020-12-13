"use strict";
//Objects
var car = { type: "Fiat", model: "500", color: "white" };

let user1 = {
  name: "Alex",
  age: 20,
  isMale: true,
  email: "user@gmail.com",
  lang: ["ru", "ukr", "eng"],
  pet: { name: "Basik", age: 23 },
};

console.log(user1["name"]);
user1.address = "New York";
console.log(user1);

let user2 = {
  fname: "Pete",
  sname: "Tong",
  age: 45,
  isMale: true,
  email: "tong@gmail.com",
  lang: ["ru", "ukr", "eng"],
  fullName: function () {
    return this.fname + " " + this.sname;
  },
};

console.log(user2.fullName());

let userCard = {
  userName: "John Smith",
  cardNumber: "1234567891011",
  cvv: 123,
  IBAN: "UA54534546545468",
  dataValid: "01/20",
};

let cat = {
  name: "Barsik",
  age: 2,
  countLegs: 4,
};

console.log(cat);
