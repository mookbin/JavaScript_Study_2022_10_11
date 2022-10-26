const inputs = document.querySelectorAll("input");
const tBodyStd = document.querySelector("tbody.std");
const btnAdd = document.querySelector("button.add");

let studentList = [];

const loadStudent = () => {
  const strStd = localStorage.getItem("StudentInfo");

  studentList = JSON.parse(strStd);
  console.log("가져온 데이터 확인");
  console.table(studentList);

  if (!studentList) {
    studentList = [];
    return false;
  }
  for (let i = 0; i < studentList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = studentList[i].id;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].subject;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].grade;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].addr;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList[i].tel;
    tr.appendChild(td);

    tBodyStd.appendChild(tr);
  }
};

loadStudent();

const saveStudent = () => {
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

const addStudent = () => {
  const std = {
    id: inputs[0].value,
    name: inputs[1].value,
    subject: inputs[2].value,
    grade: inputs[3].value,
    addr: inputs[4].value,
    tel: inputs[5].value,
  };

  studentList.push(std);
  console.table(studentList);

  localStorage.setItem("StudentInfo", JSON.stringify(studentList));

  const tr = document.createElement("TR");
  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    td.textContent = inputs[i].value;
    tr.appendChild(td);
  }
  tBodyStd.appendChild(tr);
};

const printStudent = () => {
  if (saveStudent()) {
    addStudent();
  }
};

btnAdd?.addEventListener("click", printStudent);
