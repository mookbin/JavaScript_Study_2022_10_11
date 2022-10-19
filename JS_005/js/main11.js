/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 * 입력된  이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI를 각자 디자인
 */
const inputs = document.querySelectorAll("input");
const tbodyAddr = document.querySelector("tbody.addr");
const btn = document.querySelector("button");

btnOk?.addEventListener("click", () => {
  const 이름 = [];
  for (let i = 0; i < 이름.length; i++) {
    let tr = document.createElement("TR");
    let td = document.createElement("TD");

    td.innerText = 이름[i];
    tr.appendChild(td);

    td = document.createElement("TD");
    td.innerText = "주소" + i;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.innerText = "전화번호" + i;
    tr.appendChild(td);

    tbodyAddr.appendChild(tr);
  }
});
