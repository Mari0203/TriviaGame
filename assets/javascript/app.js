// Timer Display
window.onload = function() {
  $("#start-btn").on("click", start); // Start the timer when the first answer is selected.
};

var timerCount = 60; // Start the timer at 60 seconds.
var intervalId; // Set intervalId variable to store output of each decrement

function start() {
  intervalId = setInterval(decrement, 1000); // Executes decrement function once every 1 second.
}

function decrement() {
  $("#startTrivia").show(); // Displays questionnaires
  timerCount--; // Decrement the value by 1
  $("#timer-display").html("00:" + timerCount); // Update the "timer-display" div with new value of timerCount
  //  console.log(timerCount);

  if (timerCount === 0) {
    clearInterval(intervalId); // Stop and clears a timer set with setInterval() method
    alert("Time's Up!");

    var resultsDiv = $("<div>");
    resultsDiv.append("Correct Answer: " + correctAnswer + "<br>");
    resultsDiv.append("Wrong Answer: " + wrongAnswer + "<br>");
    resultsDiv.append("unAnswered: " + unAnswered + "<br>");
    $("#results").append(resultsDiv);
    $("#results").show();
    $("#startTrivia").hide();
  }
}

// Store the Questions, the Answers and multipleChoice selections as key-value pair objects in the array, questions:
var questions = [
  {
    Q: "Q1: An alligator's brain weighs less than an _______.",
    Answer: "oreo",
    multipleChoices: ["orange", "oreo", "ant", "iPad mini"]
  },
  {
    Q: "Q2: If a wolf is kicked out of its pack, it will never ______ again.",
    Answer: "howl",
    multipleChoices: ["cuddle", "mate", "smile", "howl"]
  },
  {
    Q: "Q3: ______ is extremely poisonoous to hamsters.",
    Answer: "Guacamole",
    multipleChoices: ["Tofu", "Chocolate", "Cheese", "Guacamole"]
  },
  {
    Q: "Q4: Dwarf lemurs line their homes with ______.",
    Answer: "feces",
    multipleChoices: ["M&Ms", "dead animals", "feces", "metal fences"]
  },
  {
    Q: "Q5: Herrings communicate with ______ .",
    Answer: "farts",
    multipleChoices: ["farts", "biting", "body slamming", "spitting"]
  },
  {
    Q:
      "Q6: Black eagles watch and do not interfer when their children _______.",
    Answer: "fight to the death",
    multipleChoices: [
      "get caught by prey",
      "dance to disco",
      "try to eat poisonous berries",
      "fight each other to the death"
    ]
  },
  {
    Q: "Q7: Ants don't sleep but they take ___ minute naps twice a day.",
    Answer: "8",
    multipleChoices: ["45", "65", "8", "22"]
  },
  {
    Q: "Q8: Domesticated rabbits live 8 years as pets or ____ on their own.",
    Answer: "24 hours",
    multipleChoices: ["12 years", "24 hours", "2 years", "8 months"]
  },
  {
    Q: "Q9: Moths have no _____ .",
    Answer: "stomachs",
    multipleChoices: ["stomachs", "brains", "sense of smell", "iWatch"]
  },
  {
    Q:
      "Q10: If a female ferret goes into heat and doesn't mate, she will _____.",
    Answer: "die",
    multipleChoices: [
      "cries loud until she finds a mate",
      "hides away for a year",
      "eat those who rejected her",
      "die"
    ]
  }
];

// Store scores based on correct and wrong answers selected:
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;
$("#results").hide(); // Hide the selected element, #results

/* Execute a loop iterations [i] through key-value pairs for each object, Q in questions array; 
and print each one after another with .append into showQandA div */

for (let i = 0; i < questions.length; i++) {
  var newDiv = $("<div>");
  newDiv.html(questions[i].Q);
  $("#showQandA").append(newDiv);

  /* Execute a sub-loop iterations [k] through sub-array for multipleChoices and   */

  /* NOTE on Bootstrap's form with radio buttons below: <div class="form-check"> is for checkboxes and radio buttons.
    <input> and <label> are SIBLING ELEMENTS as opposed to <input> within a <label>; thus, you must specify BOTH
    id and for attributes to relate the <input> and <label>.  
    Code Reference: https://getbootstrap.com/docs/4.1/components/forms/ */

  for (let k = 0; k < questions[i].multipleChoices.length; k++) {
    var inputRadio = $(
      "<div class='form-check'><input class='form-check-input type=answerRadioButton' data-Answer='"+ questions[i].Answer+"' data-multipleChoices='"+ questions[i].multipleChoices[k]+"' type='radio' name='Radios' id='answerChoice1' value='option1' checked> <label class='form-check-label answerlabel'   for='exampleRadios1'>" +
        questions[i].multipleChoices[k] +
        "</label></div>"
    );
    $("#showQandA").append(inputRadio);
  }
}

/* Validates the user's radio button selection content against the Answer when clicked. */
$(".answerRadioButton").on("click", function() {
  if ($(this).attr("data-Answer") === $(this).attr("data-multipleChoices")) {
    alert("YAY! " + $(this).attr("data-Answer") + "is correct!");
    correctAnswer++;
  } 
  else {
    alert("NOPE! Wrong answer.");
    wrongAnswer++;
  }
  // Calculates the unAnswered value
  unAnswered = questions.length - (correctAnswer + wrongAnswer);
});

// Show score results when a user click 'Done! Check Score' button:
$("#done-btn").on("click", function() {
  $("#results").show();
  alert("Your score: " + (correctAnswer/questions.length)*100 + "%");
});

