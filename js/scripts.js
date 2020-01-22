$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#maxNum").val();
    var numArr = [];
    for(var i = 2; i <= input; i += 1) {
      numArr.push(i);
    }
    console.log(numArr);
  })
})