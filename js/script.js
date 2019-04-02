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
sliderValue.addEventListener('input', function(seoPrice, graphicProject, tempProject) {

  sliderOutput.innerHTML = sliderValue.value;

  clientOptionProject();
  clientOptionSEO();
  clientOptionCW();
});

// WYBÓR PROJEKT GRAFICZNY / Szablon

function clientOptionProject() {


  let projectPrice = graphicProject * sliderValue.value ;
  let tempProjectPrice = tempProject * sliderValue.value;

  // JEŚLI KLIENT WYBRAL PROJEKT GRAFICZNY
  if (document.getElementById('clientChooseProject').value == "Graphic"){

    forClientOutput.innerHTML = projectPrice;
    document.getElementById('ProjectPrice').innerHTML = graphicProject + 'zł';
  }

  // JEŚLI NIE WYBRAŁ PROJEKTU GRAFICZNEGO TO WYBRAŁ SZABLON
  else if (document.getElementById('clientChooseProject').value == "Temp"){

    forClientOutput.innerHTML = tempProjectPrice ;
    document.getElementById('ProjectPrice').innerHTML = tempProject + 'zł';
  }
};

// WYBÓR SEO
function clientOptionSEO() {

  // JEŚLI KLIENT WYBRAL SEO
  if (document.getElementById('clientChooseSEO').value == "yes"){

    forClientOutput.innerHTML = seoPrice * sliderValue.value;
    document.getElementById('SEOPrice').innerHTML = seoPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ SEO
  else if (document.getElementById('clientChooseSEO').value == "no"){

    document.getElementById('SEOPrice').innerHTML =  '0 zł';
  }
}

// WYBÓR COPYWRITING
function clientOptionCW() {

  // JEŚLI KLIENT WYBRAL COPYWRITING
  if (document.getElementById('clientCW').value == "yes"){

    forClientOutput.innerHTML = copyWritingPrice * sliderValue.value;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ COPYWRITING
  else if (document.getElementById('clientCW').value == "no"){

    document.getElementById('CWPrice').innerHTML =  '0 zł';
  }
}

// WYBÓR RWD
function clientOptionRWD() {

  // JEŚLI KLIENT WYBRAL RWD
  if (document.getElementById('clientChooseRWD').value == "yes"){

    forClientOutput.innerHTML = rwdPrice * sliderValue.value;
    document.getElementById('RWDPrice').innerHTML = rwdPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ RWD
  else if (document.getElementById('clientChooseRWD').value == "no"){

    document.getElementById('RWDPrice').innerHTML =  '0 zł';
  }
}
