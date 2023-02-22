var timer2 = "1:01";
var questionIndex = 0
const quizContainer = document.getElementById('question');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questionsArray = [
    {questions: { Question: "commonly used data types do not include",
   anwsers:{
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers"
   },
       correctAnwser: "c"
},
    },
   {questions:{
   Question : "The condition of an if/else statement is enclosed with______?",
   anwsers : {
   a: "quotes",
   b: "curly brackets",
   c: "parenthesis correct",
   d: "square brackets"
   },
       correctAnwser: "c"
},
   },
  {questions:{
   Question: "arrays in JavaScript can be used to store _____?",
   anwsers:{
   a: "numbers and strings",
   b: "other arrays",
   c: "booleans",
   d: "all of the above"
   },
       correctAnwser: "d"
},
  },
   {questions:{
   Question: "A very useful tool used during development and debugging for printing content to the debugger is:?",
   anwsers:{
   a: "Javascript",
   b: "terminal/bash",
   c: "for loops",
   d: "console.log",
   },
       correctAnwser: "d"
   },     
   },
   //{
     //  resultsPage:
       //hide quiz header and show results header
       //stop countdown/timer2 and use it as score
       //make a username summit button
       // store the info
       //play again button
   //},


]
function Quiz(){
    if (userAnwser === currentQuestion.correctAnwser){

    
            //change text color to green and move to the next question
    }
    else(userAnwser)
        timer2 - "0:15"
    //Need to fix this 
    
};

function nextQuestion(){
    if(questionIndex === questionsArray.length){
        document.querySelector(".results").style="display:block"
        document.querySelector(".question-box").style="display:none"
        document.querySelector(".playAgain").style="display:block"
        document.querySelector(".submitScoreBtn").style="display:block"
    }
    else{
    document.querySelector(".question").textContent = questionsArray[questionIndex].questions.Question
    document.querySelector(".option1").textContent = questionsArray[questionIndex].questions.anwsers.a
    document.querySelector(".option2").textContent = questionsArray[questionIndex].questions.anwsers.b
    document.querySelector(".option3").textContent = questionsArray[questionIndex].questions.anwsers.c
    document.querySelector(".option4").textContent = questionsArray[questionIndex].questions.anwsers.d
    questionIndex++}
}
document.querySelector(".option1").addEventListener("click", nextQuestion)
document.querySelector(".option2").addEventListener("click", nextQuestion)
document.querySelector(".option3").addEventListener("click", nextQuestion)
document.querySelector(".option4").addEventListener("click", nextQuestion)



var startButton = document.querySelector(".startBtn")
startButton.addEventListener("click", function(){
    document.querySelector(".startBtn").style="display:none"
    document.querySelector(".submitScoreBtn").style="display:none"
    var interval = setInterval(function() {
        var timer = timer2.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
      
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('.countdown').html(minutes + ':' + seconds);
         if (timer2 === "0:00"){
              //questionsArray === [4] 
            alert("failure")};
         // go to the results page
        timer2 = minutes + ':' + seconds;
      }, 1000);
nextQuestion()
})
function replay(){
    document.location.reload()
}
document.querySelector(".playAgain").
addEventListener("click", replay)
//End game 
//timer is stopped and used for users score
// user can enter their names and it is stored on the page



