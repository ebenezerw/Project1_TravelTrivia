//list of questions and answers

var questions = [{
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "The island of Rhodes belongs to which Mediterranean country?",
    answers: ["Italy", "Greece", "Croatia"],
    rightAnswer: 1,
    rightAnswerText: "Greece"
}, {
    question: "Euro tunnel links which two countries?",
    answers: ["Spain and Italy", "France and Germany", "England and France"],
    rightAnswer: 2,
    rightAnswerText: "England and France"
}, {
    question: "If you need an ambulance in Russia, you should dial which number?",
    answers: ["911", "112", "123"],
    rightAnswer: 1,
    rightAnswerText: "112"
}, {
    question: "Which is the oldest continously inhabited city in the world?",
    answers: ["Damascus, Syria", "Rome, Italy", "Cairo, Egypt"],
    rightAnswer: 0,
    rightAnswerText: "Damascus, Syria"
}, {
    question: "What is Ebenezer's favorite place to visit?",
    answers: ["Amalfi Coast, Italy", "Osaka, Japan", "Barcelona, Spain"],
    rightAnswer: 0,
    rightAnswerText: "Amalfi Coast, Italy"
}];

// D.H.
// Naming the above Array "questions" is similar to its "question" attribute
// May become confusing in long run
// Possible names for above array: "exam", "quiz", "trivia", "list"
// D.H.

var currentQuestion = 0; // remove the ==> var <==, the var is not global
                         // and can't be found inside document()
                         // or showCurrentQuestion()



function showCurrentQuestion() {

    console.log("In display current Question");

    var questionText = questions[currentQuestion].question;
    var questionArea = $(document).find(".question");
    var choiceList = $(document).find(".answer");
    var numOfAnswers = questions[currentQuestion].answers.length;


    $(questionArea).text(questionText);
    $(choiceList).find(".answer").remove();



//remove: var choice;
// put "choice" inside the for loop
//ie: var choice = questions[currentQuestion].answers[i]; (LINE 66)

    var choice;
    for (i = 0; i < numOfAnswers; i++) {
        choice = questions[currentQuestion].answers[i];
    $('<div class="answer"><input type="radio" value=' + i + ' name="radio" />' + choice + '</div>').appendTo(choiceList);
    }
};


//displays the first question and answer choices once the page is loaded
$(document).ready(function() {
	showCurrentQuestion();
     $('.resetButton').css("display", "none");

    // On clicking submit, display the next question

    $(this).find(".submitButton").on("click", function () {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {

                //this adds error next in the question area if no answer is selected
                $(document).find(".question").append("<br>" + " " + "Please select an answer!").css("text-align", "center");

            } else {

                //dispalys "success" pop up if the correct answer is selected and moves to the next set of answers
                $(document).find(".question");
                if (value == questions[currentQuestion].rightAnswer) {

                    notif({
                        msg: "Correct!",
                        type: "success",
                        position: "center",
                        timeout: 3000
                    });


            } else {

                //displays "error" popup with the text of the correct answer if wrong answer is selected. moves on to next set of answers
                $(document).find(".question");
                if (value != questions[currentQuestion].rightAnswer) {

                    notif({
                        msg: "Wrong! The correct answer is" + " " + questions[currentQuestion].rightAnswerText,
                        type: "error",
                        position: "center",
                        timeout: 3000
                    })

                }

            }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    showCurrentQuestion();


            //displays 'gameover' alert at the end of the game. hides submit button and displays reset button
            } else  {

                //delayed function at the end of the game to remove the submit button and replace with reset button
                setTimeout (function(){
                    $(".resetButton").css("display", "block");
                    $(".submitButton").css("display", "none");
                    notif({
                        msg: "Game Over! Click the Reset button at the bottom to play again.",
                        type: "info",
                        position: "right",
                        autohide: 0

                        })

                    }, 4000);

                }
            }


    });

});

//assigns the reload function to the reset button

$(".resetButton").on("click", function () {
    location.reload();
})




//code I had at the begging to change the css properties of the answer on click or mouseover. leaving here for now since i might try to add that in the future



 //        $("#answer").on("click", function (e) {
	// $("#answer").css("background", "orange")
	// $('#answer:not(#' + this.id + ')').css("background-color", "gray");
	// // e.stopPropagation();

 //    })


// this changes the background of the answer when you hover over it

// $(".answer").on("click", function (a) {
// 	$("#answer").css("color", "#6bcfe3");
// 	$('#answer:not(#' + this.id + ')').css("color", "black");
// 	a.stopPropagation();
// })


// This changes the background color of the selected answer to orange

// $("#answer").on("click", function (e) {
// 	$("#answer").css("background", "orange")
// 	$('#answer:not(#' + this.id + ')').css("background-color", "gray");
// 	// e.stopPropagation();
// })
