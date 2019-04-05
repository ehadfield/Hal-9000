function halsResponse(numberInput) {
  
}









//Frontend Business
$(document).ready(function() {
  $("form#halNine").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#davesInput").val());
    var output = halsResponse(numberInput);

    $("#result").text(output);

  });
});
