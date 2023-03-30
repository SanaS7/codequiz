var questionNo = 0;
var score = 0;

const questions = [
    {
        question: "Which one is the basic part of HTML?",
        options: {
            a: "html tag",
            b: "head tag",
            c: "title tag",
            d:  "body tag"
        },
        correctAnswer: "b"
    },
    {
        question: "Choose the correct HTML for inserting a line break?",
        options: {
            a: "p tag",
            b: "br tag",
            c: "div tag",
            d: "anchor tag"
        },
        correctAnswer: "b"
    },
    {
        question: "Which CSS is used to make the bold text?",
        options: {
            a: "font:bold",
            b: "font-style: bold",
            c: "font-weight:bold",
            d: "style:bold"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the extension of java code files?",
        options: {
            a: ".java",
            b: ".txt",
            c: ".class",
            d: ".js"
        },
        correctAnswer: "a"

    }
];

function loadQuestions () { 

    var answerA = document.getElementById ("answerA");
    var answerB = document.getElementById ("answerB");
    var answerC = document.getElementById ("answerC");
    var answerD = document.getElementById ("answerD");
    var questionLabel = document.getElementById ("question");

    // change the html text using the javascript 
    answerA.innerHTML = questions[questionNo].options.a;
    answerB.innerHTML = questions[questionNo].options.b;
    answerC.innerHTML = questions[questionNo].options.c;
    answerD.innerHTML = questions[questionNo].options.d;
    questionLabel.innerHTML = questions[questionNo].question;
    



}
function startGame () {
    // reference the HTML element you want to manipulate
    var introSection = document.getElementById ("heading");

    // change the element's CSS
    introSection.style.display = "none";
    var questions = document.getElementById ("questions");
    questions.style.display = "block";

    loadQuestions ();
}
function checkAnswer (userChoice) {
    if (questionNo === 4) {
        var questionsDiv = document.getElementById ("questions");
        questionsDiv.style.display = "none";
        var scorepage = document.getElementById ("scorepage");
        scorepage.style.display = "block";
        var scoreNumber = document.getElementById ("score");
        scoreNumber.innerHTML = score;
        console.log (score);
    } else {
        
        var correctAnswer = questions[questionNo].correctAnswer;
        if (correctAnswer === userChoice) {
            var answer = document.getElementById ("answer");
            answer.innerHTML = "This is correct answer" ; 
            score++;
        }else {
            var answer = document.getElementById ("answer");
            answer.innerHTML = "This is incorrect answer";
        }
        questionNo++; 
        
        if (questionNo === 4) {
            checkAnswer('');
        } else
         loadQuestions ();
    }
   
}   
