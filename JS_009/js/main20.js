const numbers = [];
let pickNumbers = 10;

for (let i = 0; i < pickNumbers; i++) {
  numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(numbers);

numbers.forEach((input) => {
  document.writeln(input);
});
