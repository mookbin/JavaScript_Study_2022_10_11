/**
 * input box에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을
 * 출력하기
 */

const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const btnOk = document.querySelector("button.btn_ok");

btnOk?.addEventListener("click", () => {
  spans[0].innerText = inputs[0].value;
  spans[1].innerText = inputs[1].value;
  spans[2].innerText = inputs[2].value;
});
