//= require moment
//= require moment/fr
//= require bootstrap-datepicker

function update_form() {
  var support_type = document.forms["soutienform"]["type_soutien"].value;
  if (support_type == "Récolteur") {
    $(".donneur, .donneur input").prop("disabled", true);
    $(".recolteur, .recolteur input").prop("disabled", false);

    $(".donneur").fadeOut();
    $(".recolteur").fadeIn();
  } else if(support_type == "Donneur") {
    $(".donneur, .donneur input").prop("disabled", false);
    $(".recolteur, .recolteur input").prop("disabled", true);

    $(".recolteur").fadeOut();
    $(".donneur").fadeIn();
  } else {
    $(".donneur, .donneur input").prop("disabled", false);
    $(".recolteur, .recolteur input").prop("disabled", false);

    $(".donneur").fadeIn();
    $(".recolteur").fadeIn();
  }
}

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

  update_form();

  $("select#type_soutien").change(function() {
    update_form();
  });
});
