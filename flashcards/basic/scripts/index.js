class question{
  constructor(question, answer){
    this.question = question;
    this.answer = answer;
  }
}

let flashcards = [new question('this is the first question', 'this is the first answer'), new question('this is the second question', 'this is the second answer'),new question('this is the third question', 'this is the third answer')];

let i = 0;
while (i < flashcards.length) {
  console.log(flashcards[i].question + '' + flashcards[i].answer);
  i++;
}
