 var targetNumber = 53;

    $("#number-to-guess").text(targetNumber);

    var crystals = $("#crystals");

    var counter = 0;

    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i< numberOptions.length; i++) {

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr(<img class="crystal-image" src="assets/immages/fireOpal.jpg" alt="fire opal"/>);

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        crystals.append(imageCrystal);         
    }

crystals.on("click", ".crystal-image", function()  {
    var crystalValue = ($(this).attr("data-crystalvalue"));

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber)  {
        alert("You Win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!");
    }
});