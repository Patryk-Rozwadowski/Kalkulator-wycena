'use strict'

var forMeOutput = document.getElementById('forMeOutput');
var forClientOutput = document.getElementById('forClientOutput');

calc();

function calc() {
  var sliderValue = document.getElementById('sliderValue').value;
  var sliderOutput = document.getElementById('value');

    var fields = $('select').change(calculate);
    var checkbox = $('input:checkbox').change(calculate)
      var basic = 700

      sliderOutput.innerHTML = sliderValue.value ;

      calculate();

    function calculate() {
      var price = 0;
      var selectvalue = 0;;
      var basic = 700

        $('input:checkbox:checked').each(function(){

          selectvalue += +$(this).val();
          $('#forClientOutput').html(parseInt(basic + selectvalue + price) + 'zł');
        })

        fields.each(function () {
          var sliderValue = document.getElementById('sliderValue');
          var sliderOutput = document.getElementById('value');
          sliderOutput.innerHTML = sliderValue.value ;
          price +=  +$(this).val();
          $('#forClientOutput').html(parseInt(basic + price * sliderValue.value + selectvalue) + 'zł');
        })
      }
}

function clientOptionProject() {

  let e = document.getElementById('clientChooseProject');
  let selected = e.options[e.selectedIndex].value;

  document.getElementById('ProjectPrice').innerHTML =  selected + 'zł';
};


function clientOptionSEO() {

  let e = document.getElementById('clientChooseSEO');
  let selected = e.options[e.selectedIndex].value;

  document.getElementById('SEOPrice').innerHTML =  selected + 'zł';
};

function clientOptionCW() {

  let e = document.getElementById('clientCW');
  let selected = e.options[e.selectedIndex].value;

  document.getElementById('CWPrice').innerHTML =  selected + 'zł';
};

function clientOptionRWD() {

  let e = document.getElementById('clientChooseRWD');
  let selected = e.options[e.selectedIndex].value;

  document.getElementById('RWDPrice').innerHTML =  selected + 'zł';
}
