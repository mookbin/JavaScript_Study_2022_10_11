const content = document.querySelector("#content");
const btnBox = document.querySelector("div.btn_box");

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag의 정보를 보관
  const target = tag.target;
  // 최초롤 클릭된 tag가 button 이면
  if (target.tagName === "BUTTON") {
    const text = target.innerText;
    if (text === "Red") {
      content.style.backgroundColor = "red";
    }
    if (text === "Blue") {
      content.style.backgroundColor = "Blue";
    }
    if (text === "Yellow") {
      content.style.backgroundColor = "Yellow";
    }
  }
});
