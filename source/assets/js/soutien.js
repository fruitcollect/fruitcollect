//= require moment
//= require moment/fr
//= require bootstrap-datepicker

function update_form() {
  /* Save these bits */
  var donneur_section = $(".donneur").detach();
  var recolteur_section = $(".recolteur").detach();

  var support_type = document.forms["soutienform"]["type"].value;
  if (support_type == "Récolteur") {
    recolteur_section.appendTo("#variable_inputs");
  } else if(support_type == "Donneur") {
    donneur_section.appendTo("#variable_inputs");
  } else {
    donneur_section.appendTo("#variable_inputs");
    recolteur_section.appendTo("#variable_inputs");
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

  $("select#type").change(function() {
    update_form();
  });
});
