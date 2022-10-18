/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *  입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 * 비밀번호부터 다시 입력받도록 하기
 */
const btn_submit = document.querySelector("div.btn_submit");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const nickname = document.querySelector("#nickname");
const tell = document.querySelector("#tell");

btn_submit?.addEventListener("click", () => {

        if (username.value == "") {
           alert ("아이디를 입력하세요");
           username.focus();
        }
       
        else if (password.value == ""){
           alert("비밀번호를 입력하세요")
           password.focus()
   
        }
        else if (password.value != re_password.value) {
           alert('패스워드가 일치하지 않습니다.');
           password.focus();
        }
        else if (nickname.value == "") {
           alert("닉네임을 입력하세요")
           nickname.focus()
           }
           else if (tell.value == "") {
               alert("전화번호를 입력하세요")
               tell.focus()
           } 
   
   
        })