(function () {

  //cached elements
  var $submitBtn = $('#submit-btn');
  var $dateDisplay = $('#date-display');
  var $userMsg = $('#user-msg');
  var $counterForm = $('#counter-form');

  //vars
  var now = new Date();
  var startHour = 18;
  var endHour = 23;

  //return boolean of whether hour is in range
  function hourIsBetween(startHour, endHour, now) {
    var nowHour = now.getHours();
    return startHour < nowHour && nowHour < endHour;
  }

  //return formatted date string date-month-year
  function getFormattedDate(now) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = now.getDate();
    var monthIndex = now.getMonth();
    var year = now.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  var strDate = getFormattedDate(now);
  $dateDisplay.html(strDate);

  if (hourIsBetween(startHour, endHour, now)) {
    $userMsg.html('');
    $counterForm.css('opacity', '1.0')
                .children()
                .prop('disabled', false);
  } else {
    $userMsg.html('Gate count can only be entered between 6pm and 8pm');
    $counterForm.css('opacity', '0.5')
                .children()
                .prop('disabled', true);
  }

  //
  // $submitBtn.on('click', function(e) {
  //   e.preventDefault();
  //
  //   $.post()
  // })
})();
