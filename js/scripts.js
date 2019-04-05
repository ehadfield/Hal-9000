//Backend Business
function halsResponse(numberInput) {
  var theArray = [];
  var count = -1;
    if (isNaN(numberInput)) {
      return theArray;
    }else {
      for (var i = 0; i < numberInput +1; i++) {
        count ++;
        theArray.push(count);
    }
  }

var newString = theArray.join();
var endArray = newString.split(",");

  for (var j = 0; j < endArray.length; j++) {
    if (endArray[j].includes("3")) {
      endArray[j] = " I'm sorry, Dave. I'm afraid I can't do that.";
    }else if (endArray[j].includes("2")) {
      endArray[j] = " Boop";
    }else if (endArray[j].includes("1")) {
      endArray[j] = " Beep";
    }
  }
  return endArray;
}
    // for (var j = 0; j < theArray.length; j++) {
      // if (theArray[j] === 1){
        // theArray[j] = " Beep";
      // }else if (theArray[j] === 2){
        // theArray[j] = " Boop";
      // }else if (theArray[j] === 3){
        // theArray[j] = " I'm sorry, Dave. I'm afraid I can't do that.";
      // }
    // }

//Frontend Business
$(document).ready(function() {
  $("form#halNine").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var numberInput = parseInt($("input#davesInput").val());
    var outPut = halsResponse(numberInput);

    $("#result").text(outPut);

  });
});
