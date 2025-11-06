 var teve = document.getElementById('teve').value;
 var strucc = document.getElementById('strucc').value;
 var formoutput = document.getElementById("formoutput").textContent;

 function submitstuff(event) {
          if (teve == 0 || strucc == 0)
          formoutput.textContent = "Hibás adat";
          else if (teve < 5) {
                    formoutput.textContent = "Ennél több teve van!"; }
          else if (teve > 5) {
                     formoutput.textContent = "Ennél kevesebb teve van!";
          }
          event.preventDefault();
 }

 form.addEventListener("submit", submitstuff);