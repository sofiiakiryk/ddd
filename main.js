let numbers = [10, 15, 20, 25, 30, 35, 40];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 13) {
    console.log(numbers[i]);
  }
}

let num1 = 2;
let num2 = 6;

for (let i = num1; i <= num2; i++) {
  console.log(i);
}

let num3 = prompt("Введіть перше число:");
let num4 = prompt("Введіть друге число:");

let sum = Number(num3) + Number(num4);

console.log("Сума чисел: " + sum);
