//Declaration for the class question
class question { 
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer){
    this.question = question;
    this.answer = answer;
  }
}

// Declare a new array
// Create three questions onto the flashcards array
let flashcards = [new question('this is the first question', 'this is the first answer'), new question('this is the second question', 'this is the second answer'),new question('this is the third question', 'this is the third answer')];

// print out the question and the answer one by one
let counter = 0;
// this status ensures the answer is to the correspondent question
let answerIsDisplayed = false;
// print out the question
document.getElementById("question").innerHTML = flashcards[counter].question;
document.getElementById('question').onclick = function() { 
  // Wait for a click to be detected on the question
    if (answerIsDisplayed === false) {
      // print out the correspond answer to the question
    document.getElementById("answer").innerHTML = flashcards[counter].answer; 
    counter++;
    // go back to the first question
    if (counter === flashcards.length) {
      counter = 0;
    }
    // answer display check
    answerIsDisplayed = true;
    }
} 


document.getElementById('answer').onclick = function() { 
  // Wait for a click to be detected on answer
    if (answerIsDisplayed === true ) {
      // print out next question when the last answer is displayed
    document.getElementById("question").innerHTML = flashcards[counter].question;
    // clean the answer to last question
    document.getElementById("answer").innerHTML = "";
    // answer display status check
    answerIsDisplayed = false;
    }
}
