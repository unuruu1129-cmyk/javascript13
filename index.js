// const run = (callback) => {
//   callback();
// };

// run(() => console.log("Ehellee"));
// run(() => console.log("Duuslaa"));
// run(() => console.log("100"));

// const sendName = (name, callback) => {
//   callback(name);
// };

// const callbackiinFunciton = (name) => {
//   console.log(`Сайн уу, ${name}! `);
// };
// const callbackiinFunciton2 = (name) => {
//   console.log(`${name.toUpperCase()} `);
// };

// sendName("Ану", callbackiinFunciton);
// sendName("Ану", callbackiinFunciton2);

// const processNumber = (number, callback) => {
//   callback(number);
// };

// processNumber(5, (num) => console.log(num * 2));
// processNumber(4, (num) => console.log(num * 4));
// processNumber(10, (num) => console.log(num - 3));

// const calculate = (a, b, callback) => {
//   callback(a, b);
// };
// calculate(8, 3, (num1,num2) => console.log(num1 + num2));
// calculate(8, 3, (num1,num2) => console.log(num1 - num2));
// calculate(8, 3, (num1,num2) => console.log(num1 * num2));

// const chooseAction = (condition, onTrue, onFalse) => {
//   if (condition) {
//     onTrue();
//   } else {
//     onFalse();
//   }
// };

// chooseAction(
//   5 > 3,
//   () => console.log("True baina"),
//   () => console.log("False baina"),
// );
// chooseAction(
//   0 > 3,
//   () => console.log("True baina"),
//   () => console.log("False baina"),
// );

// const result1 = "cat and cat".replace("cat", (match) =>
//   match.split("").reverse().join(""),
// );
// const result2 = "cat and cat".replace("cat", "dog");

// console.log(result1);
// console.log(result2);

// const result1 = "say hi".replaceAll("hi", (match) => match.toUpperCase());

// console.log(result1);

// const result = (text, price) => {
//   return text.replaceAll("{price}", `${price}$`);
// };
// console.log(result("{price} + {price}", 800));

// const result = ["Талх", "Сүү"].forEach((element, index) => {
//   console.log(`${index + 1}. ${element}`);
// });

// const toSeconds = (minuts) => {
//   return minuts.map((minuts) => minuts * 60);
// };
// console.log(toSeconds([1, 2, 5]));

// const result = (names) => {
//   return names.map((names) => names.trim(" "));
// };
// console.log(result([" Номин"]));

// const result = (temperatures) => {
//   return temperatures.filter((temp) => temp <= 0);
// };console.log(result([-5, 0, 8]));

const result=(products)=>{
    return 
}