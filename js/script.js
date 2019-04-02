var clientValue = 100;
var meValue = 200;

// WARTOŚC SUWAKA
var sliderValue = document.getElementById('sliderValue');
var sliderOutput = document.getElementById('value');

// OUTPUTY DLA WARTOŚCI KLIENTA I DLA MNIE
var forClientOutput = document.getElementById('forClientOutput');
var forMeOutput = document.getElementById('forMeOutput');


// WYPISANIE WARTOŚCI SUWAKA
sliderValue.addEventListener('input', function() {
  sliderOutput.innerHTML = sliderValue.value;

  // JEŚLI KLIENT WYBRAL PROJEKT GRAFICZNY TO a*b
  if (document.getElementById('clientChooseProject').value == "Graphic"){
    forClientOutput.innerHTML = sliderValue.value * clientValue;
    forMeOutput.innerHTML = sliderValue.value * meValue;
  }

  // JEŚLI NIE WYBRAŁ PROJEKTU GRAFICZNEGO TO
  else {
    forClientOutput.innerHTML = sliderValue.value * 1000;
    forMeOutput.innerHTML = sliderValue.value * 2000;
  }
});
