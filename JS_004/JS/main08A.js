/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *  입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 * 비밀번호부터 다시 입력받도록 하기
 */

/**
 * Selector
 * css 나 js코드에서 참조할 수 있는 tag 요소들
 * tagName(div, p) : 여러 개 있을 수 있다,
 * id(#username, #password) : 한 화면에 1개만 있어야 한다,
 * class(div.div1,button.btn) : 여러개 있을 수 있다
 */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
/**
 * HTML 에서 id 나 class 이름을 지을 때
 * snack case 로 많이 작성한다
 * 이 이름을 JS 코드에서 변수로 선언할 떄는
 * 가극적 Camel Case로 작성하는 것이 좋다
 */
const rePassword = document.querySelector("#re_password");
const btn_submit = document.querySelector("button.btn_submit");

btn_submit?.addEventListener("click", () => {
  // if(username ==="") : 보편적인 언어

  //JS 고유의 코드
  if (!username.value) {
    alert("아이디를 입력하세요");
    username.focus();
  } else if (!password.value) {
    alert("비밀번호를 입력하세요");
    password.focus();
  } else if (!txtRePassword) {
    alert("비밀번호를 확인하세요");
    rePassword.focus();
  } else {
    //서버로 전송하는 코드
  }
  return false;
});
