//First, create a embeded data called 'spacebarCount'


// Insert this part of code in the 'JavaScript' option, in your question. 
// Question should be in Text/Graphic type

Qualtrics.SurveyEngine.addOnload(function() {
    var spacebarCount = 0; //For each question I wanted it to start counting from 0
    jQuery(document).keypress(function(event) {
        if (event.which === 32) { // 32 is the ASCII code for the spacebar
            spacebarCount++;
            Qualtrics.SurveyEngine.setEmbeddedData("spacebarCount", spacebarCount);
        }
    });
});

Qualtrics.SurveyEngine.addOnReady(function() {
    var spacebarCount = Qualtrics.SurveyEngine.getEmbeddedData("spacebarCount");
    jQuery("#spacebar-count").text(spacebarCount);
});


// To display to the participant how many times they have pressed the spacebar,
// insert this part into the "HTML view" of the question:

You pressed the spacebar ${e://Field/spacebarCount} times. 