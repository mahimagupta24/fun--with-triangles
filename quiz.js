const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", calculateScore);
const correctAnswer = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult =  new FormData(quizForm)
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
    
}
console.log(score)
output.innerText="Your score is" + score;
}