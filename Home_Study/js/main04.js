const mainNav = document.querySelector("nav.main_nav")

mainNav?.addEventListener("click",(tag)=> {
    const target = tag.target

    if(target.tagName === "LI"){
        const text = target.innerText
        if (text === "구글"){
            window.open("https://google.com")

        }
    }
})