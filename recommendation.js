let bedframe = [1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let bedbank = [1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let loftbed = [1, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let column = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let triangle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let oval = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let broad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let muscular = [1.2, 0.5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let side = [1, 0.5, 1.1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let back = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let belly = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let mixed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let shoulders = [1.6, 1, 1.5, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let lowerback = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.1, 0, 0];
let neck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let breast = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let upperback = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let cool = [1, 0.5, 1, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let normal = [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let warm = [1.5, 0, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let clean = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.1, 0];
let combine = [0, 0, 0, 0, 0, 5.1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let recycle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.1];
let natural = [1, 0.5, 0.5, 1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let nomemoryfoam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let nosprings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipimportant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipexclude = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skipprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let skiphealth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let names = ["HOVAG", "MALFORS", "MYRBACKA", "VATNESTROM", "HAFSLO", "HAMARVIK", "HOKKASEN", "HYLLESTAD", "JOMNA", "MALVIK", "MATRAND", "MAUSUND", "MORGEDAL", "MOSHULT", "VADSO"];

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
