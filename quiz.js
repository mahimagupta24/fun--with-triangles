const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", calculateScore);
const correctAnswers = {
  question1: "90°",
  question2: "right angled",
  question3: "one right angle",
  question4: "a+b+c",
  question5: "30°",
  question6: "45°",
};
function calculateScore() {
  let score = 0;
  const formResult = new FormData(quizForm);
  for (let key of formResult.keys()) {
    if (correctAnswers[key] === formResult.get(key)) {
      score = score + 1;
    }
  }
  // console.log(score);
  output.innerText = "Your score is " + score;
}
  

