//First, in the survey flow create a embeded data called 'spacebarCount'


// Insert this part of code in the 'JavaScript' option, in your question. 
// Question should be in Text/Graphic type


Qualtrics.SurveyEngine.addOnload(function() {
    var count = 0; // Initialize the count variable to 0
    var intervalID = setInterval(function() {
      var randomNum = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      jQuery("#random-number").val(randomNum); // Set the value of the text box to the random number
      jQuery("#random-number-display").text(randomNum); // Display the random number in the HTML window
      if (randomNum === 5) { // Here specify which number you want to count 
        count++; // Increment the count if the random number is 5
        Qualtrics.SurveyEngine.setEmbeddedData("numFives", count); // Save the count as embedded data
      }
    }, 285); // 1000ms / 3.5 = 285ms. Based on previous research I wanted the numbers to be desplayed one every 3.5s
  
    Qualtrics.SurveyEngine.addOnUnload(function() {
      clearInterval(intervalID); // Clear the interval when the page unloads
    });
  });
  
  Qualtrics.SurveyEngine.addOnReady(function() {
    var count = Qualtrics.SurveyEngine.getEmbeddedData("numFives"); // Get the count from embedded data
    jQuery("#num-fives").text(count); // Display the count in the question text using jQuery
  });


// To disply the randomly generated numbers, insert the code below into the "HTML view" of the question:

<html>
<body>
<div id="random-number-display">Number: </div>
</body>
</html>



// To display to the participant how many times they a specific number appeared,
// insert this part into the "HTML view" of the question:

Number 5 appeared ${e://Field/numFives} times.
