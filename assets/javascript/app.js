// Timer Display
// These codes will run as soon as the page loads:
window.onload = function() {
    $("#answerSelection").on("click", start); // Start the timer when the first answer is selected.
    $("#submit").on("click", stop);  // stop the timer when the player click the Submit button.
};

$("#timer-display").text("00:00"); // Change the "timer-display" div to "00:00"

setTimout(sixtySeconds, 1000 * 60); // Times out after 60 seconds

// Use setInterval to start the count here and set the clock to running.
function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

// Example code from SimpleTimer:
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function tenSeconds() {
    // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
    // console log 5 seconds left
    $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
    console.log("5 seconds left");
  }
  
  function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up")
