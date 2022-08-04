//Declaration for the class question
class question{
    // A constructor is a special function used to create an instance of the class
  constructor(question, answer){
    this.question = question;
    this.answer = answer;
  }
}

// Declare a new array
// Create three questions onto the flashcards array
let flashcards = [new question('this is the first question', 'this is the first answer'), new question('this is the second question', 'this is the second answer'),new question('this is the third question', 'this is the third answer')];

// Loop through the array printing out the question and the answer
let i = 0;
while (i < flashcards.length) {
  console.log(flashcards[i].question + '' + flashcards[i].answer);
  i++;
}
