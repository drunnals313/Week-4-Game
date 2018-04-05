var targetNumber = 13; //need to make random once I can get it to work

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;

var numberOptions = [10, 5, 3, 7]; // need to make random once I can get it to work   can use math floor random

var winSum=0;

var loseSum=0;

var isCalculated = false;

var Chalca = {
    name = "Chalca",
    value = 2
    //1 + Math.floor(Math.random() * 1), 
}

var Quartz = {
    name = "Quartz",
    value =3
    //1 + Math.floor(Math.random() * 1),
}

var Opal = {
    name = "Opal",
    value = 5
    //1 + Math.floor(Math.random() * 1),
}

var Ocean = {
    name = "Ocean",
    value = 8
    //1 + Math.floor(Math.random() * 1),
}


Chalca.addClass("crystal-image");
Quartz.addClass("crystal-image");
Opal.addClass("crystal-image");
Ocean.addClass("crystal-image");

Chalca.attr("data-crystalvalue", Chalca.value);
Quartz.attr("data-crystalvalue", Quartz.value);
Opal.attr("data-crystalvalue", Opal.value);
Ocean.attr("data-crystalvalue", Ocean.value);



////var imageArray = {"imageOne": "chalca.jpg", "imageTwo": "Crystal-Quartz.jpg", "imageThree": "fireOpal.jpg", "imageFour": "ocean.jpg" }  

// turn these into objects (box of labeled boxes)  gandalf.age example

// need to turn this loop into the 4 images and link a number to each

////for (var i = 0; i< numberOptions.length; i++) {

    // var imageCrystal = $("<img>");


    ////imageArray.addClass("crystal-image");

    //imageArray.attr("src", "assets/immages/fireOpal.jpg");

    ////imageArray.attr("data-crystalvalue", numberOptions[i]);

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




