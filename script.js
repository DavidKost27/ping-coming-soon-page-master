function checkInput() {
  var input = document.getElementById("inputbox");
  var errText = document.getElementById("err-txt");
  var ctaBtn = document.getElementById("button-submit");

  if (input.value == "") {
    document.getElementById("inputbox").style.borderColor =
      "hsl(354, 100%, 66%)";
    errText.innerHTML = "Please provide an email address";
    errText.style.marginBottom = "24px";
  } else if (validateEmail(input.value) == false) {
    document.getElementById("inputbox").style.borderColor =
      "hsl(354, 100%, 66%)";
    errText.innerHTML = "Please provide a valid email address";
    // ctaBtn.style.marginTop = "30px";
  } else {
    errText.innerHTML = "";
    document.getElementById("inputbox").style.borderColor =
      "hsl(223, 100%, 88%)";
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
