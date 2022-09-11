const input=document.querySelectorAll(".angle-input")
const showBtn=document.querySelector("#show-button")
const output=document.querySelector("#output")
showBtn.addEventListener("click",isTriangle)
console.log(input)

function sumOfAngles(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3
    return sum;
}
function isTriangle(){
    const sum=sumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value))
    if(sum ==""){
        output.innerText="please enter the required input"
    }else if(sum===180){
    output.innerText="Yipee!its a triangle"
}else{
    output.innerText="Ah!its not a triangle"
}
}