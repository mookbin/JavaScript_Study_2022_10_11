const mainNav = document.querySelector("nav.main_nav");

mainNav?.addEventListener("click", (tag) => {
  const target = tag.target;
  if (target.tagName === "LI") {
    const text = target.innerText;
    if (text === "구글") {
      document.location.href = "https://google.com";
    } else if (text === "네이버") {
      document.location.href = "https://naver.com";
    } else if (text === "다음") {
      window.open("https://daum.net");
    } else if (text === "About") {
      document.location.href = "sub/about07.html";
    }
  }
});
