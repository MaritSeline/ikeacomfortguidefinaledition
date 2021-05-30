let bedframe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let bedbank = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let loftbed = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _90 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _120 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _140 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _180 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let side = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
let back = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1];
let belly = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0];
let mixed = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0];
let shoulders = [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1];
let lowerback = [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1];
let neck = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
let breast = [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1];
let upperback = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0];
let ventilating = [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1];
let neutral_temperature = [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
let heat_retaining = [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0];
let easy_to_clean = [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
let adjustable_bedframe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
let recyclable_materials = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0];
let natural_materials = [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1];
let no_pain = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let no_important_factors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skiphealth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let names = ["HAFSLO", "HAMARVIK", "HOKKASEN", "HOVAG", "HYLLESTAD", "MALVIK", "MATRAND", "MAUSUND", "MORGEDAL", "MYRBACKA", "VADSO", "VATNESTROM"];

var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var old = [];


window.onload = function() {
  for (var i = 0; i < sessionStorage.length; i++){
    var key = sessionStorage.key(i).toLowerCase();
    alert(key);
    document.getElementById(key+"tag").innerHTML = sessionStorage.getItem(key);
    var currentscore = eval(sessionStorage.getItem(key));
    for (var j = 0; j < score.length; j++) {
      score[j] = score[j] + currentscore[j];
    }
  }
  var imagescore = score.indexOf(Math.max(...score));
  var imagename = names[imagescore];
  document.getElementById("bestbed").src = "images/" + imagename + "_section.png";

}
