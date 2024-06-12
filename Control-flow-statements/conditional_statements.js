// Exercise 1 - Temperatures Check
// let temp = 19;
// console.log(temp);

// if (temp < 0) {
//   console.log("It's freezing!");
// } else if (temp > 0 && temp <= 15) {
//   console.log("It's cold.");
// } else if (temp >= 16 && temp <= 25) {
//   console.log("It's mild.");
// } else {
//   console.log("It's warm.");
// }

// switch (true) {
//   case temp < 0:
//     console.log("It's freezing!");
//     break;
//   case temp > 0 && temp <= 15:
//     console.log("It's cold.");
//     break;
//   case temp >= 16 && temp <= 25:
//     console.log("It's mild.");
//     break;
//   default:
//     console.log("It's warm.");
// }

// Exercise 2 - Divisibility Check
// let num = 5;

// if (num % 2 && num % 3) {
//   console.log("Divisible by both");
// } else if (num % 2) {
//   console.log("Divisible by 2");
// } else if (num % 3) {
//   console.log("Divisible by 3");
// } else {
//   console.log("Not divisible by 2 or 3");
// }

// switch (true) {
//   case num % 2 && num % 3:
//     console.log("Divisible by both");
//     break;
//   case num % 2:
//     console.log("Divisible by 2");
//     break;
//   case num % 3:
//     console.log("Divisible by 3");
//     break;
//   default:
//     console.log("Not divisible by 2 or 3");
// }

// Exercise 3 - for loops
// 1.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2.
// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   console.log(i);
// }

// 4.
// const num = [1, 2, 3, 4, 5];
// console.log(num);

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// 5.
// const numbers = [3, 7, 2, 5, 10, 6];
// let largest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//     console.log(largest);
//   }
// }

// Exercise 4 - While Loops

// 1.
// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// 2.
// let num = 1;
// while (num < 20) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// 3.
// let all_num = 0;
// let a = 1;

// while (all_num < 100) {
//   all_num += a;
//   console.log(all_num);
//   all_num++;
// }

// 4.
// let b = 1;

// while (b * 5 < 50) {
//   console.log(b * 5);
//   b++;
// }

// Exercise 5 - Do While loops

// 1.
// let c = 0;

// do {
//   console.log(c);
//   c++;
// } while (c <= 10);

// 2.
// let sumIn = 0;
// let d = 1;

// do {
//   sumIn += 1;
//   console.log(sumIn);
//   d++;
// } while (d <= 100);

// 3.
// let askForNumber = 0;

// do {
//   askForNumber = prompt("Enter a number greater than 10: ");
//   if (askForNumber >= 10) {
//     console.log(`You've entered ${askForNumber}`);
//   } else {
//     console.log("Invalid number. Please enter a number greater than 10.");
//   }
// } while (askForNumber < 10);

// 4.
let askForGuess = 0;
let guess = Math.floor(Math.random() * 10) + 1;

do {
  askForGuess = prompt("Guess a number between 1 and 10: ");
  if (askForGuess < guess) {
    prompt("Wrong Number! Guess a number between 1 and 10");
  } else {
    alert("You've guessed correct!");
  }
} while (askForGuess < guess);
