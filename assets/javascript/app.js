// Hides the Trivia Game Q & A's when the window loads until the player click "Start Game".
window.onload = function() {
  $("#showQandA").hide();
};

// // Enable background game music to play in loop.  Code reference: https://www.w3schools.com/js/js_function_invocation.asp
// var audioGame = new Audio("assets/audio/Pacman_intro.mp3");

var timerCount = 10; // Start the timer at 60 seconds.
var intervalId; // Set intervalId variable to store output of each decrement

// Functions to be executed when 'Start Game' button is clicked:
$("#start-btn").on("click", start);

function start() {
  // Start the timer.
  // Executes decrement function once every 1 second.
  intervalId = setInterval(decrement, 1000);

  // Show Trivie Q&A
  $("#showQandA").show();

  // audioGame.addEventListener(
  //   "ended",
  //   function() {
  //     this.currentTime = 0;
  //     this.play();
  //   },
  //   false
  // );
  // audioGame.play();
}

function decrement() {
  timerCount--; // Decrement the value by 1

  if (timerCount >= 0) {
    $("#timer-display").html("00:" + timerCount);

    // To adjust the timer display when the time hits single-digit.
    if (timerCount < 10) {
      $("#timer-display").html("00:0" + timerCount);
    }
  }

  if (timerCount === -1) {
    clearInterval(intervalId); // Stop and clears a timer set with setInterval() method
    alert("Time's Up!");
    $("#results").show(); // Show the player's answer selection tally.
    // audioGame.pause(); // Stop the music.
  }
  return;
}

// Store scores based on correct and wrong answers selected:
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;

// Showing the player's answer selection tally.
var resultsDiv = $("<div>");

function showScores() {
  resultsDiv.append("Correct Answer: " + correctAnswer + "<br>");
  resultsDiv.append("Wrong Answer: " + wrongAnswer + "<br>");
  resultsDiv.append("un-answered: " + unAnswered + "<br>");
  $("#results").append(resultsDiv);
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
    Answer: "fight each other to the death",
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

// Hide the selected element, #results
$("#results").hide();

/* Execute a loop iterations [i] through key-value pairs for each object, Q in questions array; 
and print each one after another with .append into showQandA div */

for (let i = 0; i < questions.length; i++) {
  var qDiv = `<div question=\"${i}\">`;
  // var showQuestion = $("<div>");
  var showQuestion = $(qDiv);

  showQuestion.html("<b><br>" + questions[i].Q + "</b><br><br>");
  showQuestion.addClass("question-styling");

  // .html($("#showQandA").html() + "<br>") added to insert line break after each showQuestion output.  Code reference: Stack overflow
  $("#showQandA").append(showQuestion);

  /* Execute a sub-loop iterations [k] through sub-array for multipleChoices and
     dynamically store values within the div into "data-Answer" and "data-multipleChoices", then
     set the whole div as the var inputRadio's JQuery selector. */

  /* NOTE on Bootstrap's form with radio buttons below: <div class="form-check"> is for checkboxes and radio buttons.
    <input> and <label> are SIBLING ELEMENTS as opposed to <input> within a <label>; thus, you must specify BOTH
    id and for attributes to relate the <input> and <label>.  
    Code Reference: https://getbootstrap.com/docs/4.1/components/forms/ */

  for (let k = 0; k < questions[i].multipleChoices.length; k++) {
    var inputRadio = $(
      "<div class='form-check'><input name='optradio" +
        i +
        "' class='form-check-input answerRadioButton' data-Answer='" +
        questions[i].Answer +
        "' data-multipleChoices='" +
        questions[i].multipleChoices[k] +
        "' type='radio' id='radioList'> <label class='form-check-label answerLabel' for='radioList'>" +
        questions[i].multipleChoices[k] +
        "</label></div>"
    );

    $("#showQandA").append(inputRadio);

    // .html($("#showQandA").html());
  }
}

$("").attr("style", "font-weight: bold; color; #726a6a");

// Answers array
// var answers = new Array(10);

/* Validates the user's radio button selection content against the Answer when clicked. */
$(".answerRadioButton").on("click", function() {
  console.log(
    "Question # :",
    $(this)
      .parent()
      .attr("question")
  );

  if ($(this).attr("data-Answer") === $(this).attr("data-multipleChoices")) {
    // alert("YES! " + $(this).attr("data-Answer") + " is the correct answer!");
    correctAnswer++;
  } else {
    // alert("NOPE! Wrong answer.");
    wrongAnswer++;
  }
  // Calculates the unAnswered value
  unAnswered = questions.length - (correctAnswer + wrongAnswer);
});

// Show score results when a user click 'Done! Check Score' button:
$("#done-btn").on("click", function() {
  $("#showQandA").show();
  $("#results").show();
  showScores;

  alert("Your final score: " + (correctAnswer / questions.length) * 100 + "%");
});
