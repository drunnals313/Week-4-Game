 var targetNumber = 53;

    $("#number-to-guess").text(targetNumber);

    var crystals = $("#crystals");

    var counter = 0;

    var numberOptions = [10, 5, 3, 7];


    // need to turn this loop into the 4 images and link a number to each

    for (var i = 0; i< numberOptions.length; i++) {

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "assets/immages/fireOpal.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        crystals.append(imageCrystal);         
    }

crystals.on("click", ".crystal-image", function()  {
    var crystalValue = ($(this).attr("data-crystalvalue"));

    counter += crystalValue;

    $("#result").text(counter);

    if (counter === targetNumber)  {
        alert("You Win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!");
    }
});


