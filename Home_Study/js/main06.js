const divs = document.querySelectorAll("section.main div")
const btnRe = document.querySelector("button")
const nums =[]

const makeNums = ()=>{
for(let i=0; i < 10; i++){
    const rndNum = Math.floor(Math.random()*100)+1
    nums[i] = rndNum
}
}

for(let index =0; index < nums.length; index++){}

const viewNums = ()=> {
    nums.forEach((num,index)=>{

        divs[index].textContent = num

    })
}

makeNums()
viewNums()

btnRe?.addEventListener("click",()=>{
    makeNums()
    viewNums()
})