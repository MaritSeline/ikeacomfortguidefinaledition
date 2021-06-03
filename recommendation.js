let bedframe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let bedbank = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let loftbed = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _90 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _120 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _140 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _160 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let _180 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let ondergewicht = [0, 2, 2, 0, 0, 2, 2, 2, 0, 2, 0, 0];
let normaal = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let overgewicht = [2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 2, 2];
let obesitas = [2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2];
let side = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
let back = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1];
let belly = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0];
let mixed = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0];
let shoulder = [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1];
let lowerback = [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1];
let neck = [0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
let breast = [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1];
let upperback = [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0];
let ventilating = [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1];
let neutral_temperature = [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
let heat_retaining = [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0];
let easy_to_clean = [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0];
let adjustable_bedframe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0];
let recyclable_materials = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0];
let natural_materials = [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1];
let no_pain = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let no_additional_requirements = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let no_specific_price = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let rangeprice = [100, 100, 300, 175, 200, 100, 200, 400, 150, 300, 50, 475];
let bedprices = [80, 100, 299, 159, 199, 100, 199, 399, 139, 299, 49, 459];

let alternativeNames = ["A budget solution", "Firm meets soft", "Filled with well-being", "Following movement", "Cushioning comfort", "Resilient foam", "Snug support", "Pleasant natural latex", "Pressure relief", "Follow body contours", "A budget solution", "Comfort of natural materials"];
let names = ["HAFSLO", "HAMARVIK", "HOKKASEN", "HOVAG", "HYLLESTAD", "MALVIK", "MATRAND", "MAUSUND", "MORGEDAL", "MYRBACKA", "VADSO", "VATNESTROM"];

var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var old = [];

window.onload = function() {

  calcScore();
  var uscore = score.slice();

  var maxScore = Math.max(...uscore);
  var imagescore = uscore.indexOf(maxScore);
  var imagename = names[imagescore];
  calcTags(imagename);
  showButtons(imagename);
  document.getElementById("bestbed").src = "images/" + imagename + "_section.png";
  document.getElementById("bestbedname").textContent = imagename;
  document.getElementById("bestbedmatch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("bestbedprice").textContent = "€" + bedprices[imagescore] + ",-";
  document.getElementById("info").src = "images/" + imagename + "_info.jpg";

  document.getElementById("bestalternative").src = "images/" + imagename + "_section.png";
  document.getElementById("bestalternativename").textContent = imagename;
  document.getElementById("bestalternativematch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("bestalternativeprice").textContent = "€" + bedprices[imagescore] + ",-";
  uscore.splice(imagescore, 1, 0);
  maxScore = Math.max(...uscore);
  imagescore = uscore.indexOf(maxScore);
  imagename = names[imagescore];

  document.getElementById("firstalternative").src = "images/" + imagename + "_section.png";
  document.getElementById("firstalternativename").textContent = imagename;
  document.getElementById("firstalternativematch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("firstalternativeprice").textContent = "€" + bedprices[imagescore] + ",-";
  alternativeTitle(imagename, "firstalternativebeam");

  uscore.splice(imagescore, 1, 0);
  maxScore = Math.max(...uscore);
  imagescore = uscore.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("secondalternative").src = "images/" + imagename + "_section.png";
  document.getElementById("secondalternativename").textContent = imagename;
  document.getElementById("secondalternativematch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("secondalternativeprice").textContent = "€" + bedprices[imagescore] + ",-";
  alternativeTitle(imagename, "secondalternativebeam");

  uscore.splice(imagescore, 1, 0);
  maxScore = Math.max(...uscore);
  imagescore = uscore.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("thirdalternative").src = "images/" + imagename + "_section.png";
  document.getElementById("thirdalternativename").textContent = imagename;
  document.getElementById("thirdalternativematch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("thirdalternativeprice").textContent = "€" + bedprices[imagescore] + ",-";
  alternativeTitle(imagename, "thirdalternativebeam");

  uscore.splice(imagescore, 1, 0);
  maxScore = Math.max(...uscore);
  imagescore = uscore.indexOf(maxScore);
  imagename = names[imagescore];
  document.getElementById("fourthalternative").src = "images/" + imagename + "_section.png";
  document.getElementById("fourthalternativename").textContent = imagename;
  document.getElementById("fourthalternativematch").textContent = uscore[imagescore] + "/" + sessionStorage.length;
  document.getElementById("fourthalternativeprice").textContent = "€" + bedprices[imagescore] + ",-";
  alternativeTitle(imagename, "fourthalternativebeam");
}

function calcScore() {
  var weight;
  var length;
  var wlcounter = -2;

  for (var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    var item = sessionStorage.getItem(key);

    if (key == "bedsizes") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + "*200 cm";
    } else if (key == "weightslider") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + " kg";
    } else if (key == "lengthslider") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + " cm";
    } else if (key == "physicalpain") {
      if (item == "no_pain") {
        document.getElementById(key + "tag").innerHTML = "Experiences " + item.replaceAll("_", " ");
      } else {
        document.getElementById(key + "tag").innerHTML = "Supports " + item.replaceAll("_", " ") + " pain";
      }
    } else if (key == "sleepingposition") {
      document.getElementById(key + "tag").innerHTML = "Fit for " + item.replaceAll("_", " ") + " sleeping";
    } else {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ");
    }
    document.getElementById(key + "tag").style.display = "inline-block";
    if (key == "weightslider") {
      wlcounter++;
      weight = item;
    } else if (key == "lengthslider") {
      wlcounter++;
      length = item;
    } else if (key == "priceslider") {
      if (item.toLowerCase() == "no_specific_price") {
        for (var j = 0; j < score.length; j++) {
          score[j] = score[j] + 1;
        }
      } else {
        for (var j = 0; j < score.length; j++) {
          if (rangeprice[j] <= item) {
            score[j] = score[j] + 1;
          }
        }
      }
    } else {
      var currentscore = eval(item.toLowerCase());
      for (var j = 0; j < score.length; j++) {
        score[j] = score[j] + currentscore[j];
      }
    }
    if (wlcounter == 0) {
      var bmi = weight / (length * length);
      var currentscore;
      if (bmi < 18.5) {
        currentscore = eval("ondergewicht");
      } else if (bmi >= 18.5 && bmi <= 25) {
        currentscore = eval("normaal");
      } else if (bmi > 25 && bmi <= 30) {
        currentscore = eval("overgewicht");
      } else if (bmi > 30) {
        currentscore = eval("obesitas");
      }
      for (var j = 0; j < score.length; j++) {
        score[j] = score[j] + currentscore[j];
      }
      wlcounter = -1;
    }
  }

  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function showthisdiv(thisid) {
  var this_id;
  if(!thisid.includes("beam")){
    this_id = thisid + "beam";
  }
  else {
    this_id = thisid;
  }
  var allAlternative = document.getElementsByClassName("alternativemattress");
  for (var i = 0; i < allAlternative.length; i++) {
    allAlternative[i].style.display = "block";
  }
  var thisElement = document.getElementById(this_id);
  thisElement.parentNode.style.display = "none";

  var bluebeam = document.getElementById("bestbluebeam");
  bluebeam.textContent = thisElement.textContent;
  var imageElement = this_id.split("beam")[0];
  var bedname = document.getElementById(imageElement + "name").textContent;
  var indexbed = names.indexOf(bedname);
  document.getElementById("bestbed").src = document.getElementById(imageElement).src;
  document.getElementById("bestbedname").textContent = bedname;
  document.getElementById("bestbedmatch").textContent = score[indexbed] + "/" + sessionStorage.length;
  document.getElementById("bestbedprice").textContent = "€" + bedprices[indexbed] + ",-";
  document.getElementById("info").src = "images/" + bedname + "_info.jpg";
  if (this_id == "bestalternativebeam") {
    bluebeam.style.background = "#0058AB";
    bluebeam.style.color = "white";
  } else {
    bluebeam.style.background = "#F5F5F5";
    bluebeam.style.color = "black";
  }
  var bed = document.getElementById(imageElement).src;
  bed = bed.split("images/")[1];
  bed = bed.split("_section.png")[0];

  showButtons(bed);
  calcTags(bed);

}

function calcTags(bedname) {
  var indexbed = names.indexOf(bedname);
  var wlcounter = -2;
  for (var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    var item = sessionStorage.getItem(key);
    if (key == "bedsizes") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + "*200 cm";
    } else if (key == "weightslider") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + " kg";
    } else if (key == "lengthslider") {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ") + " cm";
    } else if (key == "physicalpain") {
      if (item == "no_pain") {
        document.getElementById(key + "tag").innerHTML = "Experiences " + item.replaceAll("_", " ");
      } else {
        document.getElementById(key + "tag").innerHTML = "Supports " + item.replaceAll("_", " ") + " pain";
      }
    } else if (key == "sleepingposition") {
      document.getElementById(key + "tag").innerHTML = "Fit for " + item.replaceAll("_", " ") + " sleeping";
    } else {
      document.getElementById(key + "tag").innerHTML = item.replaceAll("_", " ");
    }
    if (key == "weightslider") {
      wlcounter++;
      weight = item;
    } else if (key == "lengthslider") {
      wlcounter++;
      length = item;
    } else if (key == "priceslider") {

      if (rangeprice[indexbed] > item) {
        document.getElementById(key + "tag").className = "tagcrossed";
      } else {
        document.getElementById(key + "tag").className = "taglayout";
      }

    } else {
      var checkscore = eval(item.toLowerCase());
      if (checkscore[indexbed] == 0) {
        document.getElementById(key + "tag").className = "tagcrossed";
      } else {
        document.getElementById(key + "tag").className = "taglayout";
      }
    }
    if (wlcounter == 0) {
      var bmi = weight / (length * length);
      var checkscore;
      if (bmi < 18.5) {
        checkscore = eval("ondergewicht");
      } else if (bmi >= 18.5 && bmi <= 25) {
        checkscore = eval("normaal");
      } else if (bmi > 25 && bmi <= 30) {
        checkscore = eval("overgewicht");
      } else if (bmi > 30) {
        checkscore = eval("obesitas");
      }
      if (checkscore[indexbed] == 0) {
        document.getElementById("weightslidertag").className = "tagcrossed";
        document.getElementById("lengthslidertag").className = "tagcrossed";
      } else {
        document.getElementById("weightslidertag").className = "taglayout";
        document.getElementById("lengthslidertag").className = "taglayout";      }
      wlcounter = -1;
    }
  }
}

function alternativeTitle(thisbed, thisid) {
  var element = document.getElementById(thisid);

  for (var i = 0; i < names.length; i++) {
    if (thisbed == names[i]) {
      element.textContent = alternativeNames[i];
    }
  }
}

function hideButtons() {
  var allButtons = document.querySelectorAll(".open-button");
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].style.display = "none";
  }
}

function showButtons(bedname) {
  hideButtons();
  var allButtons = document.querySelectorAll("." + bedname);
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].style.display = "block";
  }
}

function borderTags(thisid) {
  if (thisid.includes("openbutton")) {
    var thisElement = document.getElementById(thisid);
    var thisklasnaam = thisElement.className;
    var thisbed = thisklasnaam.split(" ")[1];
    var buttonNumber = 0;
    var allButtons = document.getElementsByClassName(thisbed);
    for (var i = 0; i < allButtons.length; i++) {
      var allklasnaam = allButtons[i].className;
      if (allklasnaam.includes(thisid)) {
        buttonNumber = i;
      }
    }
    var allBorders = allButtons[buttonNumber].id;
    var arrayBorders = allBorders.split("_");
    for (var i = 1; i < arrayBorders.length; i++) {
      if(!document.getElementById(arrayBorders[i] + "tag").className.includes("tagcrossed"))
      {document.getElementById(arrayBorders[i] + "tag").style.border = "3px solid #0058AB";
      document.getElementById(arrayBorders[i] + "tag").style.borderRadius = "13.5%/50%";}
    }
  }
  else{
    var allBorders = thisid;
    var arrayBorders = allBorders.split("_");
    for (var i = 1; i < arrayBorders.length; i++) {
      if(!document.getElementById(arrayBorders[i] + "tag").className.includes("tagcrossed"))
      {document.getElementById(arrayBorders[i] + "tag").style.border = "3px solid #0058AB";
      document.getElementById(arrayBorders[i] + "tag").style.borderRadius = "13.5%/50%";}
    }
  }
}

function noBorderTags(thisid) {
  var allTags = document.getElementsByClassName("taglayout");
  for (var i = 0; i < allTags.length; i++) {
    allTags[i].style.border = "none";
  }
}


function checkOut() {
  localStorage.setItem("name", document.getElementById("bestbedname").textContent);
  localStorage.setItem("price", document.getElementById("bestbedprice").textContent);
  localStorage.setItem("tags", document.getElementById("bestbedmatch").textContent);
}
