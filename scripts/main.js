// Pre-populate sign-up form fields
$(document).ready(function() {
  // Find sign-up form elements
  var $yearPicker = $("#year-picker");
  var $monthPicker = $("#month-picker");

  // Pre-populate 100 years in year picker
  prepopulateYears($yearPicker);

  // Update day picker when the year is changed
  $yearPicker.change(function() {
    dayOrMonthChanged($monthPicker, $yearPicker);
  });

  // Update day picker when the month is changed
  $monthPicker.change(function() {
    dayOrMonthChanged($monthPicker, $yearPicker);
  });

  // Update day picker on page load
  dayOrMonthChanged($monthPicker, $yearPicker);
});

function prepopulateYears($yearPicker) {
  var currentYear = new Date().getFullYear();
  var htmlOutput = "";

  for (var year = currentYear - 150; year <= currentYear; year++) {
    htmlOutput = "<option value='" + year + "'>" + year + "</option>" + htmlOutput;
  }
  $yearPicker.html(htmlOutput);
}

function dayOrMonthChanged($monthPicker, $yearPicker) {
  var selectedMonth = $monthPicker.find("option:selected").val();
  var selectedYear = $yearPicker.find("option:selected").val();

  updateDayPicker(selectedMonth, selectedYear);
}

// Borrowed from http://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function updateDayPicker(selectedMonth, selectedYear) {
  var $dayPicker = $("#day-picker");

  var daysInSelectedMonth = daysInMonth(selectedMonth, selectedYear);
  var htmlOutput = "";

  for (var day = 1; day <= daysInSelectedMonth; day++) {
    htmlOutput += "<option value='" + day + "'>" + day + "</option>";
  }
  $dayPicker.html(htmlOutput);
}