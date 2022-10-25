const btn = document.querySelector("button");
const spanNumbs = document.querySelectorAll("div.number span");
const numbers = [];
let pickNumbers = 10;

const fun1 = () => {
  for (let i = 0; i < pickNumbers; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
  }

  console.log(numbers);

  numbers.forEach((input) => {
    document.writeln(input);
  });
};
btn.addEventListener("click", fun1);
