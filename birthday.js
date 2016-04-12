$(document).ready(function() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'October', 'November', 'December'];

  months.forEach(function(month) {
    $('#month').append("<option>" + month + "</option>");
  });

  for (var day = 1; day <= 31; day++) {
    $('#day').append("<option>" + day + "</option>");
  }

  for (var year = 2016; year >= 1950; year--) {
    $('#year').append("<option>" + year + "</option>");
  }
});
