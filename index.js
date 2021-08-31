var readlineSync= require('readline-sync');

var userName= readlineSync.question("Enter the Participant name ");

var score=0;

console.log("Welcome "+userName+ ",to How Well Do you Know Me Quiz ");

function play(question, answer){

var userAnswer= readlineSync.question(question);

if (userAnswer === answer){
  score++;
  console.log("Correct Answer !!! ");
  console.log("The score is ",score);
  
}
else{
  score--;
  console.log(" Correct answer is ", answer)
  console.log("Current score is ",score);
}
console.log("--------------------")
}//End of Function



var questionSet =[
    {
      question:"Question 1: Which of the folllwing is my favourite Sports? \n a. Chess \n b.Rubiks Speedsolving \n c. Volley Ball \n (answer as a/b/c) ",
      answer:"a", 
    },
    {
    question:" Question 2: Where is my Hometown ? \n a. Haldwani, UK \n b. Mathura UP \n c. Geeta Colony, Delhi ",
    answer:"b", 
    },
    {
      question: "Question 3: My Favourite genre of music ?\n a. Fusions \n b. Indian Classical \n c. HipHop ",
      answer:"c",
    },
    {
      question: " Question 4: Which of the following is my fav anime ?  \n a. Dragon Ball Z \n b. Death Note \n c. One Punch Man ",
      answer: "c",
    },
    {
      question:" Question 5: Which of the following is one of my fav Youtube Channel? \n a. Dude Perfect \n b. PewdiePie \n c. KSI ",
      answer: "a",
    }
  ];

for(var i=0;i<questionSet.length;++i){
  var currentQuestion= questionSet[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your Final score is ",score," out of 5");

// Link to the Publish repl app of this quiz 
// https://replit.com/@SomeEarthJ/Questions-here-we-go?embed=1&output=1#index.js