//= require moment
//= require moment/fr
//= require bootstrap-datepicker

$(document).ready(function () {
  $('#datepicker-birth').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    startView: "years",
    /* maxViewMode: 0,*/
    todayBtn: false,
    language: "fr",
    multidate: false,
    calendarWeeks: false,
    autoclose: true,
    todayHighlight: true,
    endDate: new Date(),
    language: 'fr',
    defaultViewDate: {'year': 1980}
  });
});
