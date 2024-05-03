$(document).ready(function() {
var x = document.getElementById(".hamburger");

        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
  });

$(document).ready(function() {
    // if the box is checked pull up primary insurance

        x.classList.toggle("change");
      
    $('#submit').click(function() {
        // Play the audio
        $('WebDev Final/Media/button-124476.mp3')[0].play();
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
    });