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
let flashcards = [new question('this is really the first question', 'this is really the first answer'), new question('this is the second question', 'this is the second answer'),new question('this is the third question', 'this is the third answer')];

// Loop through the array printing out the question and the answer
let i = 0;
while (i < flashcards.length) {
  console.log(flashcards[i].question + '' + flashcards[i].answer);
  i++;
}
let j = 0;
while (j < flashcards.length) {
  alert(flashcards[j].question);
  alert(flashcards[j].answer);
  j++;
}
//document.getElementById("question").style.display = "none";
//document.getElementById("answer").style.display = "none";
//let counter = 0;
//while (counter < flashcards.length) {
//document.getElementById("question").innerHTML = flashcards[counter].question;
//document.getElementById('question').onclick = function() { // Wait for a click to be detected on p1
    //document.getElementById("answer").innerHTML = flashcards[counter].answer;  
// Display a message
//}
//counter++;
}
//document.getElementById('this is the first question').onmouseover = function() { // Wait for a click to be detected on p1
//document.write(flashcards[0].answer); // Display a message
//}


