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



function scoreCalc(clicked_id) {
  var sName = document.getElementById(clicked_id);
  var superName = sName.className;

  if (old.includes(superName)) {
    soort = old.lastIndexOf(superName);
    name = old[soort + 1];
    var aftrekken = eval(name);
    for (var i = 0; i < score.length; i++) {
      score[i] = score[i] - aftrekken[i];
    }

  }
  var optrekken = eval(clicked_id);
  for (var i = 0; i < score.length; i++) {
    score[i] = score[i] + optrekken[i];
  }
  old.push(superName, clicked_id);
  var image = score.indexOf(Math.max(...score));
  document.getElementById("right").innerHTML = "<img src='images/" + names[image] + ".jpg' style='max-width:100%; max-height:100%;'/>";

  if(clicked_id=="warm" || clicked_id=="cool" || clicked_id=="shoulders" || clicked_id=="muscular")
  {
    document.getElementById("right").innerHTML = "<img src='images/" + names[image] + clicked_id + ".jpg' style='max-width:100%; max-height:100%;'/>";
  }
}

function donebutton() {
  document.getElementById("donebutton").innerHTML = "<a href='recommendation.html'> <img src='images/donebutton.jpg' width='10%' /> </a>";
}

function blueBorder(clicked_id) {
  var cName = document.getElementById(clicked_id);
  var skip = false;
  if(cName.className.includes("skip"))
  {
    classnaam = cName.className.split(" ", 1);
    skip = true;
  }
  else {
    classnaam = cName.className;
  }
  var all = document.getElementsByClassName(classnaam);

  for (var i = 0; i < all.length; i++) {
    all[i].style.border = "none";
    all[i].style.borderRadius = "none";
  }

  document.getElementById(clicked_id).style.border = "3px solid #0058AB";
  document.getElementById(clicked_id).style.borderRadius = "100%";
  if (classnaam != "bedsizes") {
    document.getElementById(classnaam).checked = true;
  }
  if (classnaam == "bedsizes" || classnaam == "important") {
    document.getElementById(clicked_id).style.borderRadius = "0%";
  }
  if(skip){
    document.getElementById(clicked_id).style.borderRadius= "13.5%/50%";
  }
}

function sliderFunction(clicked_id) {
  var cName = document.getElementById(clicked_id);
  document.getElementById(cName.className).checked = true;

  const
    range = document.getElementById(clicked_id),
    rangeV = document.getElementById(clicked_id + 'v'),
    setValue = () => {
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);

  var image = score.indexOf(Math.max(...score));
  if(clicked_id=="rangelength"){
  document.getElementById("right").innerHTML = "<img src='images/" + names[image] + "lengte.jpg' style='max-width:100%; max-height:100%;'/>";
}
}



function hiddenDiv(thisdiv) {
  var x = document.getElementById("div" + thisdiv);

  var all = document.getElementsByClassName(x.className);

  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function loadonclickimage(thisbutton) {
  var elementbutton = document.getElementById(thisbutton);
  var cid = thisbutton.split('button')[0];
  var chapterid = document.getElementById(cid);
  var allchapters = document.getElementsByClassName("hiddenchapter");
  for (var i = 0; i < allchapters.length; i++) {
    allchapters[i].style.display = "none";
  }
  chapterid.style.display = "block";

  var allbuttons = document.getElementsByClassName(elementbutton.className);
  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].src = "images/greydot.jpg";
  }
  elementbutton.src = "images/bluedot.jpg";
}

function scrollView(thisid) {
  var scroller = document.getElementById(thisid);
  scroller.scrollIntoView(false);
}
