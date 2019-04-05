function halsResponse(numberInput) {
  var theArray = [];
  var count = 0;
    if (isNaN(numberInput)) {
      return theArray;
    }else {
      for (var i = 0; i < numberInput; i++) {
        count ++;
        theArray.push(count);
      }
    }
    for (var j = 0; j < theArray.length; j++) {
      if (theArray[j] === 1){
        theArray[j] = "Beep";
      }else if (theArray[j] === 2){
        theArray[j] = "Boop";
      }else if (theArray[j] === 3){
        theArray[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
      }
    }
    return theArray;
}









//Frontend Business
$(document).ready(function() {
  $("form#halNine").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#davesInput").val());
    var outPut = halsResponse(numberInput);

    $("#result").text(outPut);

  });
});
