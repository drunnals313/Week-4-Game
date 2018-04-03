 var targetNumber = 53; //need to make random once I can get it to work

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;

var numberOptions = [10, 5, 3, 7]; // need to make random once I can get it to work

var winSum=0;

var loseSum=0;

var isCalculated = false;

var imageArray = ["chalca.jpg", "Crystal-Quartz.jpg", "fireOpal.jpg", "ocean.jpg"]

// need to turn this loop into the 4 images and link a number to each

for (var i = 0; i< numberOptions.length; i++) {

    // var imageCrystal = $("<img>");


    imageArray.addClass("crystal-image");

    //imageArray.attr("src", "assets/immages/fireOpal.jpg");

    imageArray.attr("data-crystalvalue", numberOptions[i]);

    //crystals.append(imageArray);         
}



crystals.on("click", ".crystal-image", function()  {
    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#result").text(counter);

    if (counter === targetNumber)  {
        winSum++;        
        document.getElementById("resultMessage").innerText = "You Win!";
        document.getElementById("totalWins").innerText = winSum;
        isCalculated = true;
        
    }

    else if (counter >= targetNumber) {
        loseSum++;        
        document.getElementById("resultMessage").innerText = "You Lose!";
        document.getElementById("totalLosses").innerText = loseSum;
        isCalculated = true;
    }
});




