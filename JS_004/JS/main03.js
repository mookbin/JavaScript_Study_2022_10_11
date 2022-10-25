const content = document.querySelector("#content");
const btnBox = document.querySelector("div.btn_box");

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag의 정보를 보관
  const target = tag.target;
  // 최초로 클릭된 tag가 button 이면
  if (target.tagName === "BUTTON") {
    content.style.backgroundColor = text;
  }
});
