'use strict'
var sliderValue = document.getElementById('sliderValue').value;
var sliderOutput = document.getElementById('value');


var forMeOutput = document.getElementById('forMeOutput');
var forClientOutput = document.getElementById('forClientOutput');

function calc() {
    var fields = $('select').change(calculate);
    var checkbox = $('input:checkbox').change(calculate)
    var price = 0;
    var selectvalue = 0;
    var checkboxsum = 0;
    var basic = 700;

    var sliderValue = document.getElementById('sliderValue').value;
    var sliderOutput = document.getElementById('value');

      sliderOutput.innerHTML = sliderValue ;

      calculate()

    function calculate() {
      var price = 0;
      var selectvalue = 0;
      var checkboxsum = 0;
      var basic = 700;

          $('input:checkbox').change(function(){

            $('input:checkbox:checked').each(function(){

              price += +$(this).val();
              $('#forClientOutput').html(parseInt(basic + checkboxsum + (price * sliderValue)) + 'zł');

            });
        })

        fields.each(function () {

        price +=  +$(this).val();

          if($("input:checkbox").is(':checked'))
            $('#forClientOutput').html(parseInt(basic + checkboxsum + (price * sliderValue)) + 'zł');
          else
            $('#forClientOutput').html(parseInt(basic + (price * sliderValue)) + 'zł');
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
