$(document).ready(function() {
  $('#submit').on('click', function() {
    console.log(this);
    const name = $('#name');
    const email = $('#email');
    const phone = $('#phone');
    const message = $('#message');
    const required = [name, email, phone];

    for (var i = 0; i < required.length; i++) {
      const currentInput = $(required[i]);
      // because it's still returning an object, even though it's only one thing, we still have to target the first item in the object so we put the [0] on it
      if (currentInput[0].value === '') {
        console.log('empty');
        $('#message')
          .text('Please fill out required fields')
          .addClass('warning');
        currentInput.prev('label').addClass('warning');
      } else {
        currentInput.prev('label').removeClass('warning');
        $('#message')
          .text('');
      }
    }

    if (!$('label').hasClass('warning')) {
      console.log("clear");
      $('form').remove();
      $('#pre-form h2').text('Thank you for your feedback!');
    }
  })
});
