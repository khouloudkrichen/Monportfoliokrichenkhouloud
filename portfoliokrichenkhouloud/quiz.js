
function calculateScore() {
    const form = document.getElementById("quiz-form");
    const resultElement = document.getElementById("result");
    const formData = new FormData(form);
  
    let score = 0;
    formData.forEach((value) => {
      if (value === "correct") {
        score++;
      }
    });
  
    resultElement.innerText = `Votre score : ${score}/10`;
  }
  
  document.getElementById("submit-btn").addEventListener("click", calculateScore);
  