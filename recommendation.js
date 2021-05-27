let bedframe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let bedbank = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let loftbed = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//let 90 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//let 120 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//let 140 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//let 180 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let side = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1];
let back = [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1];
let belly = [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0];
let mixed = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
let shoulders = [-, -, -, -, -, -, -, -, -, -, 1, -, 1, -, 1];
let lowerback = [-, -, -, -, -, -, -, -, -, -, 1, -, 1, -, 1];
let neck = [-, -, -, -, -, -, -, -, -, -, -, -, -, -, -];
let breast = [-, -, -, -, -, -, -, -, -, -, -, -, -, -, -];
let upperback = [-, -, -, -, -, -, -, -, -, -, -, -, -, -, -];
let cool = [-, -, -, 1, -, -, -, -, -, 1, 1, -, 0, 1, 1];
let normal = [-, -, -, 0, -, -, -, 1, 0, 0, -, -, 1, 0, 1];
let warm = [-, -, -, 0, -, -, -, -, 1, 0, -, -, 1, 0, 0];
let clean = [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0];
let combine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
let recycle = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
let natural = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1];
let skipimportant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipexclude = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skiphealth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let names = ["HAFSLO", "HAMARVIK", "HOKKASEN", "HOVAG", "HYLLESTAD", "JOMNA", "MALFORS", "MALVIK", "MATRAND", "MAUSUND", "MORGEDAL", "MOSHULT", "MYRBACKA", "VADSO", "VATNESTROM"];

var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var old = [];


window.onload = function() {
  for (var i = 0; i < sessionStorage.length; i++){
    var key = sessionStorage.key(i);
    alert(key);
    document.getElementById(key+"tag").innerHTML = sessionStorage.getItem(key);
    var currentscore = eval(sessionStorage.getItem(key));
    for (var j = 0; j < score.length; j++) {
      score[j] = score[j] + currentscore[j];
    }
  }
  var imagescore = score.indexOf(Math.max(...score));
  var imagename = names[imagescore];
  document.getElementById("bestbed").src = "images/" + imagename + "_section.jpg";

}
