window.onload=function(){
  var el = document.getElementById("submit_button");
  el.addEventListener("click", Submittion);

  function Submittion() {
    var first_value = parseInt(document.getElementById("1").value);
    var second_value = parseInt(document.getElementById("2").value);
    var result;
    if (document.getElementById("addition").checked == true) {
      result = first_value + second_value;
    }
    else if (document.getElementById("substraction").checked == true) {
      result = first_value - second_value;
    }
    else if (document.getElementById("multiplication").checked == true) {
      result = first_value * second_value;
    }
    else if (document.getElementById("division").checked == true) {
      result = first_value / second_value;
    }
    document.getElementById("result_area").innerHTML = "Wynik: " + result;
  }
}
