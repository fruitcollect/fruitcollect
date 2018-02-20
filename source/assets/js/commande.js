//= require moment
//= require moment/fr
//= require bootstrap-datepicker
//= require jquery.timepicker

$(document).ready(function () {
  var dates_disabled = [];
  var a_year_from_now = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  var d = new Date();
  d.setHours(0,0,0,0);

  for(d; d <= a_year_from_now; d.setDate(d.getDate() + 1)) {
    if (enableEverySecondSunday(d) == false) {
      var string_date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      dates_disabled.push(string_date);
    }
  }

  $('#datepicker-livraison').datepicker({
    format: "dd/mm/yyyy",
    startDate: new Date(),
    weekStart: 1,
    startView: "days",
    maxViewMode: 1,
    todayBtn: false,
    language: "fr",
    multidate: false,
    datesDisabled: dates_disabled,
    calendarWeeks: false,
    autoclose: true,
    todayHighlight: true,
    endDate: a_year_from_now,
  });

  // a and b are javascript Date objects
  function dateDiffInDays(a, b) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }


  //Logic to enable every sunday, how to do every other sunday?
  function enableEverySecondSunday(date) {
    var day = date.getDay();
    var startingDate = new Date(2017, 03, 30);
    var diffDays = dateDiffInDays(startingDate, date);
    return ((day == 0) && (Math.ceil(diffDays % 14 == 0))) ? true : false; //sunday and every other weeks
  }

  $('#timepicker-livraison').timepicker({
    'minTime': '9:00am',
    'maxTime': '1:00pm',
    'timeFormat': 'H:i',
    'step' : 15,
  });
});
