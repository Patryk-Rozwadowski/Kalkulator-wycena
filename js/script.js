var clientValue = 100;
var meValue = 200;

var sliderValue = document.getElementById('sliderValue');
var sliderOutput = document.getElementById('value');

var forClientOutput = document.getElementById('forClientOutput');
var forMeOutput = document.getElementById('forMeOutput');


// WYPISANIE WARTOŚCI SUWAKA

sliderValue.addEventListener('input', function() {
    sliderOutput.innerHTML = sliderValue.value;

    forClientOutput.innerHTML = sliderValue.value * clientValue;
    forMeOutput.innerHTML = sliderValue.value * meValue;
})
