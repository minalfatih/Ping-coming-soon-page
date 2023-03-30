let input = document.querySelector(".emailInput");
let error = document.querySelector(".error");
document.forms[0].onsubmit = function () {
  let myInput = input.value;
  let re = /\w+(\d+)?@\w+.(com|org|net|\w{2,})/gi;
  if (myInput.match(re)) {
    console.log("yes");
  } else {
    input.style.cssText = "border-color: hsl(356, 100%, 66%);";
    error.style.cssText = "display: flex";
    return false;
  }
};
