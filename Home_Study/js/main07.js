const mainSection = document.querySelector("section.main");
const sub1Section = document.querySelector("section.sub1");
const sub2Section = document.querySelector("section.sub2");
const btnRefresh = document.querySelector("button");
const nums = [];

const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};


const viewNums = () => {
    mainSection.textContent = "";
    nums.forEach((num) => {
      const div = document.createElement("DIV");
      div.textContent = num;
      mainSection.appendChild(div);
    });
  };
  

  const evenNums = () => {
    sub1Section.textContent = "짝수" + "";
    nums.forEach((num1) => {
      if (num1 % 2 == 0) {
        const div = document.createElement("DIV");
        div.textContent = num1;
        sub1Section.appendChild(div);
      }
    });
  };
  


const oddNums = () => {
  sub2Section.textContent = "홀수" + "";
  nums.forEach((num2) => {
    if (num2 % 2 == 1) {
      const div = document.createElement("DIV");
      div.textContent = num2;
      sub2Section.appendChild(div);
    }
  });
};


const init = ()=>{
    makeNums()
viewNums()
evenNums()
oddNums()

}

init()
btnRefresh?.addEventListener("click", init)


