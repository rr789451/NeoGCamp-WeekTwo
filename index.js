var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var flag = 0;

var highScores = [{
  name: "Omer",
  points: 4
},{
  name: "Abhishek",
  points: 3
}];

var questions = [{
  question: "Who played the character of charlie harper?\n",
  answer: "charlie sheen"
},{
  question: "After which season did charlie sheen leave the show?\n",
  answer: "8"
},{
  question: "How was alan related to charlie?\n",
  answer: "Brother"
},{
  question: "How many years did alan live in charlie's house?\n",
  answer: "11"
},{
  question: "Who bought the house of charlie harper?\n",
  answer: "Walden Schmidt"
}];

function welcome(){
  var username = readlineSync.question("What is your name?\n");
  console.log("Welcome "+username+" to are you an expert on Two and a Half Men?\n");
}

function checkAnswers(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right!\n"));
    score+=1;
  }
  else{
    console.log(chalk.red("Wrong!\n"));
  }
}

function quiz(){
  for(var i = 0; i < questions.length; i++){
    var current = questions[i];
    checkAnswers(current.question, current.answer);
  }
}

function finalScore(){
  console.log("Your final score is: "+score+"\n");
  console.log("Current High Scores\n");
  highScores.map(scores =>
    {
      console.log(scores.name+" : "+scores.points)
      if(score > scores.points)
      {
        flag++;
      }
    }
  );
  if(flag===2){
    console.log("You've scored the highest points in this game!!");
  }
}

welcome();
quiz();
finalScore();