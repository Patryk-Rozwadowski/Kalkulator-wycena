

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
var forMeOutput = document.getElementById('forMeOutput');

// WYPISANIE WARTOŚCI SUWAKA



$(function () {
    var fields = $('#pricing :input').change(calculate);

    function calculate() {
        var price = 0;
        fields.each(function () {
            price += +$(this).val();
        })
        $('#forClientOutput').html(price);
    }
})



/*
function final() {

  var e = document.getElementById('clientChooseProject');
  var selected = e.options[e.selectedIndex].value;

  var total = 0;
  var totalseo = 0;

        selected = document.getElementById('clientChooseProject').selectedOptions
        l = selected.length;
    for (var i = 0; i < l; i++) {
       total = parseInt(selected[i].value);
  }

  selectedseo = document.getElementById('clientChooseSEO').selectedOptions
    w = selectedseo.length;
    for (var w = 0; i < w; w++) {
    totalseo = parseInt(selected[w].value);
  }
  finalPrice.innerHTML = parseInt(total + totalseo);
}

// WYBÓR PROJEKT GRAFICZNY / Szablon

function clientOptionProject(selected) {

  var e = document.getElementById('clientChooseProject');
  var selected = e.options[e.selectedIndex].value;

  if (selected == "300"){

    document.getElementById('ProjectPrice').innerHTML =  selected + 'zł';

  }

  else if (selected == "100"){
      document.getElementById('ProjectPrice').innerHTML = selected + 'zł';

    }
    return selected;
};

// WYBÓR SEO
function clientOptionSEO(selectedseo) {

  var seo = document.getElementById('clientChooseSEO');
  var selectedseo = seo.options[seo.selectedIndex].value;

  if (selectedseo == "500"){

      document.getElementById('SEOPrice').innerHTML =  selectedseo + 'zł';
  }

  else if (selectedseo == "0"){

      document.getElementById('SEOPrice').innerHTML = selectedseo + 'zł';
    }
      return selected + selectedseo;
};

// WYBÓR COPYWRITING
function clientOptionCW(selectedseo, selected) {


  if (document.getElementById('clientCW').value == "no" && document.getElementById('clientChooseProject').value == "yes" && document.getElementById('clientChooseSEO').value == "yes"){

    finalPrice.innerHTML = graphicProject + seoPrice;
    document.getElementById('CWPrice').innerHTML =  '0 zł';
  }

  else if (document.getElementById('clientCW').value == "yes" && document.getElementById('clientChooseProject').value == "yes" && document.getElementById('clientChooseSEO').value == "yes"){

    finalPrice.innerHTML = graphicProject + copyWritingPrice + seoPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }

  else if (document.getElementById('clientCW').value == "yes" && document.getElementById('clientChooseProject').value == "yes" && document.getElementById('clientChooseSEO').value == "no"){

    finalPrice.innerHTML = graphicProject + copyWritingPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }

  else if (document.getElementById('clientCW').value == "no" && document.getElementById('clientChooseProject').value == "no" && document.getElementById('clientChooseSEO').value == "yes"){

    finalPrice.innerHTML = tempProject + seoPrice;
    document.getElementById('CWPrice').innerHTML =  '0 zł';
  }

  else if (document.getElementById('clientCW').value == "yes" && document.getElementById('clientChooseProject').value == "no" && document.getElementById('clientChooseSEO').value == "yes"){

    finalPrice.innerHTML = tempProject + copyWritingPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }

  else if (document.getElementById('clientCW').value == "yes" && document.getElementById('clientChooseProject').value == "no" && document.getElementById('clientChooseSEO').value == "no"){

    finalPrice.innerHTML = tempProject + copyWritingPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
  }
  else if (document.getElementById('clientCW').value == "no" && document.getElementById('clientChooseProject').value == "yes" && document.getElementById('clientChooseSEO').value == "no") {

    finalPrice.innerHTML = graphicProject;
    document.getElementById('CWPrice').innerHTML = '0 zł';
  }

  else if (document.getElementById('clientCW').value == "yes") {

    finalPrice.innerHTML = copyWritingPrice;
    document.getElementById('CWPrice').innerHTML = copyWritingPrice + 'zł';
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
*/
