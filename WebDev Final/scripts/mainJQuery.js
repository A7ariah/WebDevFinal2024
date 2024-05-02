

$(document).ready(function() {
    // if the box is checked pull up primary insurance

    function myFunction() {
        x.classList.toggle("change");
      }

    function myFunction() {
        var x = document.getElementById(".hamburger");

        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    $('#clickButton').click(function() {
        // Play the audio
        $('#audio')[0].play();
      });
      
    $('#boxPPI').on('click', function () {
        if ($('#boxPPI').is(':checked')) {
            $('#primary').show();
        } else {
            $('#primary').hide();
            $('#secondary').hide();
        }
    });

    
    $('#boxPSI').on('click', function () {
        if ($('#boxPSI').is(':checked')) {
            $('#secondary').show();
        } else {
            $('#secondary').hide();
        }
    });

    $('.boxPTA').on('click', function () {
       if ($('.boxPTA').is(':checked')) {
                $('#textAlert').show();
                alert('Data charges may apply.');
        } else {
            $('#textAlert').hide();
        }
    });

    $('#submit').on('click', function () {
        var $name = $('#name').val()

             alert('Information for '+ ($name) +' submitted successfully.')
             $(':text').val('');
             $('.boxPTA').prop('checked', false)

             $('#primary').hide();
             $('#secondary').hide();
             $('#textAlert').hide();

     });


    // SEPERATE IF STATEMENT  pull up secondary insurance info 
    // if box text alert is checked pull that up (will automaticaly be at end)

    //alert saying info submitted succesfully
    // if primary is unchecked secondary must be unchecked


    });