const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

const scoreCheck = () => {
  for (let i = 2; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;

    if (!input.value) {
      alert(`${holderText} 점수를 입력하세요`);
    } else if (Number(input.value) < 0 || Number(input.value) > 100) {
      alert(`${holderText} 점수는 0 ~ 100까지 입력하세요`);
    } else if (!Number(input.value)) {
      alert(`${holderText} 점수는 숫자로만 입력하세요`);
    } else {
      continue;
    }
    input.value = "";
    input.focus();
    return false;
  }
  return true;
};

const scoreInput = () => {
  const tr = document.createElement("TR");
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");

    td.textContent = inputs[i].value;
    tr.appendChild(td);

    if (i > 1) {
      sum += Number(inputs[i].value);
    }
  }
  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  td = document.createElement("TD");
  td.textContent = Math.round(sum / 3);
  tr.appendChild(td);
  tbodyScore.append(tr);
};

let numList = [];

const numLoad = () => {
  const strNum = localStorage.getItem("myNum");
  numList = JSON.parse(strNum);
  JSON.parse(scoreInput)
  console.log("가져온 데이터 확인");
  console.table(numList);
  if (!numList) {
    numList = [];
    return false;
  }
  for (let i = 0; i < numList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = numList[i].sc_num;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = numList[i].sc_name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = numList[i].sc_kor;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = numList[i].sc_math;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = numList[i].sc_eng;
    tr.appendChild(td);

    tbodyScore.appendChild(tr);
  }
};

numLoad();

const numCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!input.value) {
      alert(`${input.placeholder} 를(을) 입력하세요`);
      input.focus();
      return false;
    }
  }
  return true;
};

const numInput = () => {
  const num = {
    sc_num: inputs[0].value,
    sc_name: inputs[1].value,
    sc_kor: inputs[2].value,
    sc_math: inputs[3].value,
    sc_eng: inputs[4].value,
  };

  numList.push(num);
  console.table(numList);
  localStorage.setItem("myNum", JSON.stringify(numList));
};

btnAdd?.addEventListener("click", () => {
  if (numCheck()) {
    numInput();
    scoreInput();
  }
});