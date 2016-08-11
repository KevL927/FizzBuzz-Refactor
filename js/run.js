$( document ).ready(function() {

  $('#enter-number-form').submit(function(event) {
    $('.answer').empty();
    event.preventDefault();
    var enteredNum = $('#integer-entry').val();
        enteredNum = +enteredNum;

    function fizzBuzz () {
      var finalAnswer = "",
          i = 1;
        while(enteredNum >= i) {
        if (i % 3 === 0 && i % 5 === 0){
            finalAnswer += "FizzBuzz<br>";
          } else if (i % 3 === 0){
            finalAnswer += "Fizz<br>";
          } else if (i % 5 === 0){
            finalAnswer += "Buzz<br>";
          } else {
            finalAnswer += i + "<br>";
          }
          i++;
          }
          return finalAnswer;
        }

    if (isNaN(parseInt(enteredNum)) || enteredNum % 1 != 0) {
      $('.answer').append('<p>Please type an integer</p>');
    } else {
      $('.answer').append('<p>' + fizzBuzz() + '</p>');
    }

    $(this)[0].reset();
  });

});
