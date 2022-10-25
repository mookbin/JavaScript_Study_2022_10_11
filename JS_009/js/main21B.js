const divs = document.querySelectorAll("section.main div");
const btnRefresh = document.querySelector("button");
const nums = [];

for (let i = 0; i < 10; i++) {
  const rndNum = Math.floor(Math.random() * 100) + 1;
  nums[i] = rndNum;
}

for (let index = 0; index < nums.length; index++) {}

nums.forEach((num, index) => {
  divs[index].textContent = num;
});

btnRefresh?.addEventListener("click", () => {
  // 키보드에서 F5 키를 누른 것처럼
  //정말로 화면을 새로 고침하라
  document.location.reload();
});
