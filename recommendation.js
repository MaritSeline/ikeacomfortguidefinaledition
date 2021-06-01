let bedframe =                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let bedbank =                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let loftbed =                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _90 =                         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _120 =                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _140 =                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _160 =                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _180 =                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let ondergewicht =                [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0];
let normaal =                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let overgewicht =                 [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1];
let obesitas =                    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1];
let side =                        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
let back =                        [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1];
let belly =                       [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0];
let mixed =                       [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0];
let shoulder =                    [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1];
let lowerback =                   [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1];
let neck =                        [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
let breast =                      [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1];
let upperback =                   [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0];
let ventilating =                 [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1];
let neutral_temperature =         [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
let heat_retaining =              [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0];
let easy_to_clean =               [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
let adjustable_bedframe =         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
let recyclable_materials =        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0];
let natural_materials =           [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1];
let no_pain =                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let no_additional_requirements =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let no_specific_price =           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rangeprice =                  [100,100,300,175,200,100,200,400,150,300,50,475];

let names = ["HAFSLO", "HAMARVIK", "HOKKASEN", "HOVAG", "HYLLESTAD", "MALVIK", "MATRAND", "MAUSUND", "MORGEDAL", "MYRBACKA", "VADSO", "VATNESTROM"];

var score =                       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var old = [];

window.onload = function() {

  calcScore();

  var maxScore = Math.max(...score);
  var imagescore = score.indexOf(maxScore);
  var imagename = names[imagescore];
  calcTags(imagename);

  document.getElementById("bestbed").src = "images/" + imagename + "_section.png";
  document.getElementById("bestalternative").src = "images/" + imagename + "_section.png";
  score.splice(imagescore, 1, 0);
  maxScore = Math.max(...score);
  imagescore = score.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("firstalternative").src = "images/" + imagename + "_section.png";
  score.splice(imagescore, 1, 0);
  maxScore = Math.max(...score);
  imagescore = score.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("secondalternative").src = "images/" + imagename + "_section.png";
  score.splice(imagescore, 1, 0);
  maxScore = Math.max(...score);
  imagescore = score.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("thirdalternative").src = "images/" + imagename + "_section.png";
  score.splice(imagescore, 1, 0);
  maxScore = Math.max(...score);
  imagescore = score.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("fourthalternative").src = "images/" + imagename + "_section.png";
}

function calcScore() {
  var weight;
  var length;
  var wlcounter = -2;

  for (var i = 0; i < sessionStorage.length; i++){
    var key = sessionStorage.key(i);
    var item = sessionStorage.getItem(key);
    document.getElementById(key+"tag").innerHTML = item.replaceAll("_"," ");

    if(key == "weightslider")
    { wlcounter++;
      weight = item;
    }
    else if (key == "lengthslider") {
      wlcounter++;
      length = item;
    }
    else if (key == "priceslider") {
      for (var j = 0; j < score.length; j++) {
        if(rangeprice[j] <= item)
        {
          score[j] = score[j] + 1;
        }
      }
    }
    else {
      var currentscore = eval(item.toLowerCase());
      for (var j = 0; j < score.length; j++) {
        score[j] = score[j] + currentscore[j];
      }
    }
    if (wlcounter == 0)
    {
      var bmi = weight/(length*length);
      var currentscore;
      if (bmi < 18.5)
      {
        currentscore = eval("ondergewicht");
      }
      else if (bmi >= 18.5 && bmi <= 25)
      {
        currentscore = eval("normaal");
      }
      else if (bmi > 25 && bmi <= 30)
      {
        currentscore = eval("overgewicht");
      }
      else if (bmi > 30)
      {
        currentscore = eval("obesitas");
      }
      for (var j = 0; j < score.length; j++) {
        score[j] = score[j] + currentscore[j];
      }
    }
  }
}

function showthisdiv(thisid){
  var allAlternative = document.getElementsByClassName("alternativemattress");
  for (var i = allAlternative.length; i--;)
    {allAlternative[i].style.display = "block";}
  var thisElement = document.getElementById(thisid);
  thisElement.parentNode.style.display="none";

  var bluebeam = document.getElementById("bestbluebeam");
  bluebeam.textContent = thisElement.textContent;
  var imageElement = thisid.split("beam")[0];
  document.getElementById("bestbed").src = document.getElementById(imageElement).src;

  if(thisid == "bestalternativebeam"){
    bluebeam.style.background = "#0058AB";
    bluebeam.style.color = "white";
  }
  else {
    bluebeam.style.background = "#F5F5F5";
    bluebeam.style.color = "black";
  }
  var bed = document.getElementById(imageElement).src;
  bed = bed.split("images/")[1];
  bed = bed.split("_section.png")[0];

  calcTags(bed);

}

function calcTags(bedname){
  var indexbed = names.indexOf(bedname);
  alert(score);
  alert(score[indexbed]);
  var wlcounter = -2;
  for (var i = 0; i < sessionStorage.length; i++){
    var key = sessionStorage.key(i);
    var item = sessionStorage.getItem(key);
    document.getElementById(key+"tag").innerHTML = item.replaceAll("_"," ");
    if(key == "weightslider")
    { wlcounter++;
      weight = item;
    }
    else if (key == "lengthslider") {
      wlcounter++;
      length = item;
    }
    else if (key == "priceslider") {

        if(rangeprice[indexbed] > item){
          document.getElementById(key+"tag").className = "tagcrossed";
        }
        else {
          document.getElementById(key+"tag").className = "taglayout";
        }

    }
    else {
      var checkscore = eval(item.toLowerCase());
        if(checkscore[indexbed] == 0){
          document.getElementById(key+"tag").className = "tagcrossed";
        }
        else {
          document.getElementById(key+"tag").className = "taglayout";
        }
    }
    if (wlcounter == 0)
    {
      var bmi = weight/(length*length);
      var currentscore;
      if (bmi < 18.5)
      {
        checkscore = eval("ondergewicht");
      }
      else if (bmi >= 18.5 && bmi <= 25)
      {
        checkscore = eval("normaal");
      }
      else if (bmi > 25 && bmi <= 30)
      {
        checkscore = eval("overgewicht");
      }
      else if (bmi > 30)
      {
        checkscore = eval("obesitas");
      }
      if(checkscore[indexbed] == 0){
        document.getElementById(key+"tag").className = "tagcrossed";
      }
      else {
        document.getElementById(key+"tag").className = "taglayout";
      }
    }
  }
}
