$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#maxNum").val();
    var numArr = [];
    var primeArr = [];
    for(var i = 2; i <= input; i += 1) {
      numArr.push(i);
    }
    console.log(numArr);
    for(var i = 0; i < numArr.length; i++){
      if (test_prime(numArr[i])) {
        primeArr.push(numArr[i]);
      }
    }
    $("#output").text(primeArr.join(", "));
  })
})

//returns true if num is prime or false if num is not
function test_prime(num){
  if (num===1){
    return false;
  } else if(num===2){
    return true;
  } else {
    for(var x=2; x<num; x++){
      if(num % x === 0){
        return false;
      }
    }
    return true;
  }
}