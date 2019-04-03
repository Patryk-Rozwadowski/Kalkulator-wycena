'use strict';

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

var finalPrice = forClientOutput;
// WYPISANIE WARTOŚCI SUWAKA
sliderValue.addEventListener('input', function() {

  sliderOutput.innerHTML = sliderValue.value;

  clientOptionProject(sliderValue.value);
});

// WYBÓR PROJEKT GRAFICZNY / Szablon

function clientOptionProject() {

  // JEŚLI KLIENT WYBRAL PROJEKT GRAFICZNY
  if (document.getElementById('clientChooseProject').value == "yes" && document.getElementById('clientChooseSEO').value == "yes"){

    document.getElementById('ProjectPrice').innerHTML = graphicProject + 'zł';
    finalPrice.innerHTML = graphicProject + seoPrice;
  }

  // JEŚLI NIE WYBRAŁ PROJEKTU GRAFICZNEGO TO WYBRAŁ SZABLON
  else if (document.getElementById('clientChooseProject').value == "no" && document.getElementById('clientChooseSEO').value == "yes"){

    document.getElementById('ProjectPrice').innerHTML = tempProject + 'zł';
    finalPrice.innerHTML = tempProject + seoPrice;
  }

  else if (document.getElementById('clientChooseProject').value == "yes"){

      document.getElementById('ProjectPrice').innerHTML = graphicProject + 'zł';
      finalPrice.innerHTML = graphicProject;
  }

  else if (document.getElementById('clientChooseProject').value == "no"){

      document.getElementById('ProjectPrice').innerHTML = tempProject + 'zł';
      finalPrice.innerHTML = tempProject;
    }

};

// WYBÓR SEO
function clientOptionSEO() {

  if (document.getElementById('clientChooseSEO').value == "no" && document.getElementById('clientChooseProject').value == "yes") {
    document.getElementById('SEOPrice').innerHTML =  '0 zł';
    finalPrice.innerHTML = graphicProject;
  }

  // JEŚLI NIE WYBRAŁ SEO
  else if (document.getElementById('clientChooseSEO').value == "no" && document.getElementById('clientChooseProject').value == "no"){

    finalPrice.innerHTML = tempProject;
    document.getElementById('SEOPrice').innerHTML =  '0 zł';
  }

  // JEŚLI KLIENT WYBRAL SEO
  else if (document.getElementById('clientChooseSEO').value == "yes" && document.getElementById('clientChooseProject').value == "yes"){

    finalPrice.innerHTML = graphicProject + seoPrice;
    document.getElementById('SEOPrice').innerHTML = seoPrice + 'zł';
  }

  else if (document.getElementById('clientChooseSEO').value == "yes" && document.getElementById('clientChooseProject').value == "no"){

    finalPrice.innerHTML = tempProject + seoPrice;
    document.getElementById('SEOPrice').innerHTML = seoPrice + 'zł';
  }
}

// WYBÓR COPYWRITING
function clientOptionCW() {

  // JEŚLI KLIENT WYBRAL COPYWRITING
  if (document.getElementById('clientCW').value == "yes"){


    finalPrice.innerHTML = graphicProject + copyWritingPrice + seoPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ COPYWRITING
  else if (document.getElementById('clientCW').value == "no"){

    finalPrice.innerHTML = graphicProject + 0;
    document.getElementById('CWPrice').innerHTML =  '0 zł';
  }

  else if (document.getElementById('clientCW').value == "no" && document.getElementById('clientChooseSEO').value == "yes"){

    finalPrice.innerHTML = graphicProject + seoPrice;
    document.getElementById('CWPrice').innerHTML =  '0 zł';
  }
}

// WYBÓR RWD
function clientOptionRWD() {

  // JEŚLI KLIENT WYBRAL RWD
  if (document.getElementById('clientChooseRWD').value == "yes"){

    //forClientOutput.innerHTML = rwdPrice * sliderValue.value;
    document.getElementById('RWDPrice').innerHTML = rwdPrice + 'zł';
  }

  // JEŚLI NIE WYBRAŁ RWD
  else if (document.getElementById('clientChooseRWD').value == "no"){

    document.getElementById('RWDPrice').innerHTML =  '0 zł';
  }
}
