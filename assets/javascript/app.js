// Timer Display
window.onload = function() {
  $("#start-btn").on("click", start); // Start the timer when the first answer is selected.
  $("#submit").on("click", stop); // stop the timer when the player click the Submit button.
};

var timerCount = 5;

// Use setInterval to start the count here and set the clock to running.
var intervalId;

function start() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  $("#startTrivia").show();
  timerCount--;
  $("#timer-display").html("00:" + timerCount); // Change the "timer-display" div to "00:00"
  console.log(timerCount);

  if (timerCount === 0) {
    // stop();
    clearInterval(intervalId);
    alert("Time Up!");


    var resultsDiv=$("<div>")
       resultsDiv.append("Correct Answer: " +correctAnswer+"<br>")
       resultsDiv.append("Incorrect Answer: " +incorrectAnswer +"<br>")
       resultsDiv.append("unAnswer: " + unAnswer+"<br>")
       $("#results").append(resultsDiv)
    $("#results").show();
    $("#startTrivia").hide();
  }
}

var questions = [
  { Q: "question 1: ", R: "a1", A: ["a1", " a2", " a3", " a4"] },
  { Q: "question 2", R: "a3", A: ["a1", " a2", " a3", " a4"] }
];

var correctAnswer=0;
var incorrectAnswer=0;
var unAnswer=0;
$("#results").hide();

for (let i = 0; i < questions.length; i++) {
  var newDiv = $("<div>");
  newDiv.text(questions[i].Q);
  $("#showPossibleAnswers").append(newDiv);

  for (let j = 0; j < questions[i].A.length; j++) {
      var inputRadio=$("<div class='form-check'><input class='form-check-input answerRadioButton' data-rightAnswer='" + questions[i].R + "' data-answer='"+questions[i].A[j]+"'  type='radio' name='exampleRadios' id='answerChoice1' value='option1' checked> <label class='form-check-label answerlabel'   for='exampleRadios1'>"+ questions[i].A[j] +"</label></div>");
    // newDiv.attr("data-answer", question[i].A[j]);
    $("#showPossibleAnswers").append(inputRadio);
  }
}

$(".answerRadioButton").on("click", function(){

  if($(this).attr("data-answer")===$(this).attr("data-rightAnswer")){
    alert($(this).attr("data-rightAnswer"))
    correctAnswer++;
  }
     else{
      alert("wrong answer")
      incorrectAnswer++;
     }
   
     unAnswer= questions.length - correctAnswer -incorrectAnswer;

     


})