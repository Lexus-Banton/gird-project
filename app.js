// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');

console.log(questionSection, askedQuestion, askButton, answerSection, questionDisplay, answerDisplay);

//Add event Listeners here
askButton.addEventListener('click' ,() => {

  // copy question to display
  const question = askedQuestion.Value;
  //TODO: user didn't ask question
  questionDisplay.textContent = question;

//hide question/show answer
  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');

});