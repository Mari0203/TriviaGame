// Timer Display
window.onload = function() {
  $("#start-btn").on("click", start); // Start the timer when the first answer is selected.
  $("#done-btn").on("click", stop); // stop the timer when the player click the Submit button.
};

var timerCount = 60; // Start the timer at 60 seconds.
var intervalId; // Set intervalId variable to store output of each decrement

function start() {
  intervalId = setInterval(decrement, 1000); // Executes decrement function once every 1 second.
}
function decrement() {
  $("#startTrivia").show();  // Displays questionnaires
  timerCount--;              // Decrement the value by 1
  $("#timer-display").html("00:" + timerCount); // Update the "timer-display" div with new value of timerCount
  //  console.log(timerCount); 

  if (timerCount === 0) {  
    clearInterval(intervalId);  // Stop and clears a timer set with setInterval() method
    alert("Time's Up!");

    var resultsDiv = $("<div>");
    resultsDiv.append("Correct Answer: " + correctAnswer + "<br>");
    resultsDiv.append("Incorrect Answer: " + incorrectAnswer + "<br>");
    resultsDiv.append("unAnswer: " + unAnswer + "<br>");
    $("#results").append(resultsDiv);
    $("#results").show();
    $("#startTrivia").hide();
  }
}

var questions = [
  { Q: "Q1: An alligator's brain weighs less than an _______.", Answer: "oreo", multipleChoices: ["orange", "oreo", "ant", "iPad mini"] },
  { Q: "Q2: If a wolf is kciked out of its pack, it will never ______ again.", Answer: "howl", multipleChoices: ["cuddle", "mate", "smile", "howl"] },
  { Q: "Q3: ______ is extremely poisonoous to hamsters.", Answer: "Guacamole", multipleChoices: ["Tofu", "Chocolate", "Cheese", "Guacamole"] },
  { Q: "Q4: Dwarf lemurs line their homes with ______.", Answer: "feces", multipleChoices: ["M&Ms", "dead animals", "feces", "metal fences"] },
  { Q: "Q5: Herrings communicate with ______ .", Answer: "farts", multipleChoices: ["farts", "biting", "body slamming", "spitting"] },
  { Q: "Q6: Black eagles watch and do not interfer when their children _______." , Answer: "fight to the death", multipleChoices: ["get caught by prey", "dance to disco", "try to eat poisonous berries", "fight each other to the death"] },
  { Q: "Q7: Ants don't sleep but they take ___ minute naps twice a day.", Answer: "8", multipleChoices: ["45", "65", "8", "22"] },
  { Q: "Q8: Domesticated rabbits live 8 years as pets or ____ on their own.", Answer: "24 hours", multipleChoices: ["12 years", "24 hours", "2 years", "8 months"] },
  { Q: "Q9: Moths have no _____ .", Answer: "stomachs", multipleChoices: ["stomachs", "brains", "sense of smell", "iWatch"] },
  { Q: "Q10: If a female ferret goes into heat and doesn't mate, she will _____.", Answer: "die", multipleChoices: ["crys loud until she finds a mate", "hides away for a year", "eat those who rejected her", "die"] }
];

// Store scores based on correct and wrong answers selected:
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;
$("#results").hide();  // Hide the selected element, #results

for (let i = 0; i < questions.length; i++) {
  var newDiv = $("<div>");
  newDiv.text(questions[i].Q);
  $("#showPossibleAnswers").append(newDiv);

  for (let j = 0; j < questions[i].multipleChoices.length; j++) {
    var inputRadio = $(
      "<div class='form-check'><input class='form-check-input answerRadioButton' data-rightAnswer='" +
        questions[i].Answer +
        "' data-mu;tipleChoices='" +
        questions[i].multipleChoices[j] +
        "'  type='radio' name='exampleRadios' id='answerChoice1' value='option1' checked> <label class='form-check-label answerlabel'   for='exampleRadios1'>" +
        questions[i].multipleChoices[j] +
        "</label></div>"
    );
    // newDiv.attr("data-answer", question[i].A[j]);
    $("#showPossibleAnswers").append(inputRadio);
  }
}

$(".answerRadioButton").on("click", function() {
  if ($(this).attr("data-answer") === $(this).attr("data-rightAnswer")) {
    alert($(this).attr("data-rightAnswer"));
    correctAnswer++;
  } else {
    alert("Sorry, wrong answer...");
    wrongAnswer++;
  }

  // Calculates the unAnswered value
  unAnswered = questions.length - correctAnswer - wrongAnswer; 
});
