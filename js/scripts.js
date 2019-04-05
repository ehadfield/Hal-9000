function halsResponse(numberInput) {
  var theArray = [], count 0;
  if (inNaN(numberInput)) {
    return theArray;
  }else {
    for (var i = 0; i < numberInput; 1++){
      count ++;
      theArray.push(count);
    }
    for (var i = 0; i < theArray.length; 1++){
      if (theArray[i] === 1){
        theArray[i] = "Beep";
      }else if (theArray[i] === 2){
        theArray[i] = "Boop";
      }else if (theArray[i] === 3){
        theArray[i] = "I'm sorry, Dave. I'm afraid I can't do that";
      }
    }return theArray;
  }
};









//Frontend Business
$(document).ready(function() {
  $("form#halNine").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#davesInput").val());
    var outPut = halsResponse(numberInput);

    $("#result").text(outPut);

  });
});
