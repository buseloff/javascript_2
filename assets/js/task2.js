"use strict";
//Objects
/*var car = { type: "Fiat", model: "500", color: "white" };

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

console.log(cat);*/

let user = {
  firstName: "Vasya",
  lastName: "Ivanov",
  workExperince: 0,
  isMale: true,
};

console.log(user);
console.log(user.firstName + " " + user.lastName);
user.category = "junior";
console.log(user);

let user2 = {
  firstName: "Jack",
  lastName: "Sparrow",
  isMale: true,
  SayHello: function () {
    console.log(
      "Hello! My name is ",
      this.firstName + " " + this.lastName + " !"
    );
  },
  OutThisObject: function () {
    console.log(this);
  },
};
user2.SayHello();
user2.OutThisObject();

//--------------------------------
const Car = {
  name: "Doblo",
  price: 15000,
};

const Producer = {
  name: "Fiat",
  location: "Italy",
  model: Car,
};

console.log(Producer);
