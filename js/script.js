var clientValue = 100;
var meValue = 200;

//CENY ZA USŁUGI
var graphicProject = 300;
var tempProject = 100;

var seoPrice = 3000;
var copyWritingPrice = 500;
var rwdPrice = 1000;

// WARTOŚC SUWAKA
var sliderValue = document.getElementById('sliderValue');
var sliderOutput = document.getElementById('value');

// OUTPUTY DLA WARTOŚCI KLIENTA I DLA MNIE
var forClientOutput = document.getElementById('forClientOutput');
var forMeOutput = document.getElementById('forMeOutput');


// WYPISANIE WARTOŚCI SUWAKA
sliderValue.addEventListener('input', function() {

  sliderOutput.innerHTML = sliderValue.value;

  clientOptionProject();
  clientOptionSEO();
});

// WYBÓR PROJEKT GRAFICZNY / Szablon

function clientOptionProject(subpageCount) {
  var subpageCount = sliderValue.value;

  // JEŚLI KLIENT WYBRAL PROJEKT GRAFICZNY
  if (document.getElementById('clientChooseProject').value == "Graphic"){
    forClientOutput.innerHTML = subpageCount * graphicProject;
    forMeOutput.innerHTML = subpageCount * graphicProject;

    document.getElementById('ProjectPrice').innerHTML = graphicProject + 'zł';
  }

  // JEŚLI NIE WYBRAŁ PROJEKTU GRAFICZNEGO TO WYBRAŁ SZABLON
  else if (document.getElementById('clientChooseProject').value == "Temp"){
    forClientOutput.innerHTML = subpageCount * tempProject;
    forMeOutput.innerHTML = subpageCount * tempProject;

    document.getElementById('ProjectPrice').innerHTML = tempProject + 'zł';
  }
  return subpageCount;
};

// WYBÓR SEO
function clientOptionSEO(subpageCount) {
  var subpageCount = sliderValue.value;

  // JEŚLI KLIENT WYBRAL SEO
  if (document.getElementById('clientChooseSEO').value == "yes"){
    forClientOutput.innerHTML = subpageCount * seoPrice;
    forMeOutput.innerHTML = subpageCount * seoPrice;

    document.getElementById('SEOPrice').innerHTML = seoPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ SEO
  else if (document.getElementById('clientChooseSEO').value == "no"){
    document.getElementById('SEOPrice').innerHTML =  '0 zł';
  }
  return subpageCount;
}
