////////////
//for loop//
////////////

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/////////
//while//
/////////

// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }

////////////
//do-while//
////////////

// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while(k < 10);

////////////
//for-each//
////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.forEach((number, idx) => {
//   console.log(`Number: ${number}, Index: ${idx}`);
//   //   console.log("Number: " + number + ", Index: " + idx);
// });

/////////////////////////////////////////////////////////////
////////////////////functions////////////////////////////////
/////////////////////////////////////////////////////////////

//es5
//function sum(num1, num2) {
// console.log(num1 + num2);
//}

//sum(3, 2);

//es6
//const sub = (num1, num2) => {
// console.log(num2 - num1);
//};

// setTimeout(() => {
//   sub(1, 4);
// }, 2000);

///////////////////////////////////////
///////////////DOM/////////////////////
///////////////////////////////////////

// const secondElement = document.getElementById("second");
// console.log();
// secondElement.setAttribute("class", "abc 1234");

// secondElement.classList += " 12345";

// const firstElement = document.querySelector(".first");
// console.log(firstElement);

// const similarClassElement = document.querySelectorAll(".first");
// console.log(similarClassElement);

// similarClassElement.forEach((element) => {
//   console.log(element.innerText);
// });

const allElements = document.querySelectorAll("p");
allElements.forEach((element) => {
  element.innerText = parseInt(element.innerText) + 40;
  //   console.log();
});
