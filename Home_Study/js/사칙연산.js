const inputNum1 = document.querySelector("#num1")
const inputNum2 = document.querySelector("#num2")
const result = document.querySelector("#result")

const num1s = document.querySelectorAll("span.num1")
const num2s = document.querySelectorAll("span.num2")

const results = document.querySelectorAll("span.result")

const btn = document.querySelector("button")

btn.addEventListener("click",()=> {
    const intNum1 = Number(inputNum1.value)
    const intNum2 = Number(inputNum2.value)

    num1s[0].innerText = intNum1
    num1s[1].innerText = intNum1
    num1s[2].innerText = intNum1
    num1s[3].innerText = intNum1

    num2s[0].innerText = intNum2
    num2s[1].innerText = intNum2
    num2s[2].innerText = intNum2
    num2s[3].innerText = intNum2

    results[0].innerText = intNum1 + intNum2
    results[1].innerText = intNum1 - intNum2
    results[2].innerText = intNum1 * intNum2
    results[3].innerText = intNum1 / intNum2

    result.style.display = "block";
})