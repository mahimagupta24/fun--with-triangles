const input=document.querySelectorAll(".side-input")
const hypotenuseBtn=document.querySelector("#calculate-hypotenuse")
const output=document.querySelector("#output")
hypotenuseBtn.addEventListener('click',calculateHypotenuse)

function calculateSum(a,b){
    const sum=a*a + b*b;
    return sum
}

function calculateHypotenuse(){
    const sum=calculateSum(Number(input[0].value),Number(input[1].value))
    if (Number(input[0].value) ==""||Number(input[1].value) == "") {
        output.innerText="Please enter both the values."
    }else if(Number(input[0].value<=0)||Number(input[1].value<=0)){
        output.innerText="Values can't be negative."
    }

    else {
    const result=Math.sqrt(sum)
    output.innerText="The hypotenuse of the given numbers is "+result
}
}