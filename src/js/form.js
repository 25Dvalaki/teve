var teve = document.getElementById('teve').value;
var strucc = document.getElementById('strucc').value;
var formoutput = document.getElementById("formoutput");

if (teve == 0 || strucc == 0) {
formoutput = "Hibás adat"
}

// formoutput isnt modified... atleast, page doesn't get it.
// try Number();'ing the vars, check if theyre nan {(isNaN(var))}
// actually scratch the above, only number inputs should be valid... darn