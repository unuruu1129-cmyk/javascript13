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

// const result=(products)=>{
//     return products.filter((element)=>element.available===true);
// };
// console.log(result([{id: 1, available: true}, {id: 2, available: false}]));

// const findTemperatur=(tempertures)=>{
//     return tempertures.find((temp)=>temp>30);
// };console.log(findTemperatur([22, 32, 35]));

// const result=(words)=>{
//     return words.find((word)=>word.startsWith("b"));
// };
// console.log(result(["cat", "book", "bag"]));

// const result=(numbers)=>{
//     return numbers.findIndex((numb)=>numb<0);
// };
// console.log(result([4, -2, -8]));

// const result=(isRead)=>{
//     return isRead.findIndex((element)=>element.isRead===false);
// };
// console.log(result([{isRead: true}, {isRead: false}]));

// const result=(numbers)=>{
//     return numbers.findLast((numb)=>numb%2===0);
// };
// console.log(result([2, 7, 8, 3]));

// const result=(words)=>{
//     return words.findLast((word)=>word.length>4);
// };console.log(result(["apple", "cat", "school"]));

// const result=(prices)=>{
//     return prices.some((price) => price < 1000);
// };
// console.log(result([1000, 1200]));

// const result=(text)=>{
//     return text.some((test)=>test.endsWith("?"));
// };
// console.log(result(["Тийм", "Үгүй"]));

// const result=(numbers)=>{
//     return numbers.every((numb)=>numb>=0 && numb<=100);
// };
// console.log(result([0, 75, 100]));

// const result=(text)=>{
//     return text.every((elemnt)=>elemnt.paid===true);
// };
// console.log(result([{paid: true}, {paid: false}]));

// const result=(sum)=>{
//      return sum.reduce((total, element) => {
//         return total + element;
//     }, 0);
// };console.log(result([1200, 800, 500]));

// const result=(products)=>{
//        return products.reduce((sum, element) => {
//         return sum + element.price * element.quantity;
//     }, 0);

// }; console.log(result([{price: 500, quantity: 2}, {price: 800, quantity: 1}]));

// const result=(temperaturs)=>{
//     return temperaturs.sort((a,b)=>a-b);
// }; console.log(result([10, 2, 1]));

// const result=(points)=>{
//     return points.sort((a,b)=>b-a);
// };
// console.log(result([70, 95, 80]));
