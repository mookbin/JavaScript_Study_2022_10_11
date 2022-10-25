const inputSearch = document.querySelector("input[name=search]")
const btnSearch = document.querySelector("button.search")

btnSearch?.addEventListener("click", ()=>{
    const txtSearch = inputSearch.value

    if(!txtSearch){
        alert("검색어를 입력하세요")
        inputSearch.focus()
        return false
    }
    const googleURL = "https://google.co.kr/search"
    const naverURL = "https://search.naver.com/search.naver"
    const daumURL = "https://search.daum.net/search"

    window.open(`${googleURL}?q=${txtSearch}`, "_blank")
    window.open(`${naverURL}?query=${txtSearch}`, "_blank")
    window.open(`${daumURL}?q=${txtSearch}`, "_blank")


})