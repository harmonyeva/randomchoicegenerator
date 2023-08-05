// button to get & generate answer
const generateAnswer = document.getElementById('generate');

generateAnswer.addEventListener("click", getAnswer)


// picking a random choice


function getAnswer() {
    let choices = document.getElementById('choices').value;
    choices = choices.split("\n");
    let index = Math.floor(choices.length * Math.random());
    document.getElementById('answer').innerHTML = choices[index];
}




