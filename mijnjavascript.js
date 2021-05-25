var selectedChapter = "chapter1";
var savedtag = "";

//go to next question + skip question
function nextQuestion(clicked_id) {
  var cName = document.getElementById(clicked_id);
  var skip = false;
  var chapterboolean = false;
  if (cName.className.includes("skip")) {
    classnaam = cName.className.split(" ", 1);
    skip = true;
  } else {
    classnaam = cName.className;
  }
  var classnamen = cName.className.split(" ");

//set default image + if first question is answered show side with tags
  sessionStorage.setItem(classnamen[0], clicked_id);
  var storage = sessionStorage.getItem(classnamen[0]);
  if (classnamen[0]=="bedsizes") {
    storage=storage + "*200";
  }
  document.getElementById(classnamen[0] + "tag").innerHTML = storage;
  savedtag = storage;
  document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";
  if (classnamen[1] == "chapter1") {
    document.getElementById("left").style.width = "70%";
    document.getElementById("right").style.display = "block";
    document.getElementById("progressbar").style.width = "70%";
    document.getElementById("imageresult").innerHTML = "<img src='images/mattress_shadow.png' alt='' class='' id='defaultimage' width='100%'>";
    document.getElementById("div11").className = "div41";
    document.getElementById("div12").className = "div42";
    document.getElementById("div13").className = "div43";

  }
  otherChapter("rightbutton");
}

//sliders
function sliderFunction(clicked_id) {
  var cName = document.getElementById(clicked_id);
  const
    range = document.getElementById(clicked_id),
    rangeV = document.getElementById(clicked_id + 'v'),
    setValue = () => {
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
      classnamen = cName.className.split(" ");
      sessionStorage.setItem(classnamen[0], range.value);

      //add text to tags
      if (classnamen[0] == "weightslider") {
        document.getElementById(classnamen[0] + "tag").innerHTML = range.value + "kg";
      } else {
        document.getElementById(classnamen[0] + "tag").innerHTML = range.value;
      }
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);

}

//arrows of progressbar working
function otherChapter(clickedbutton) {
  var sChapter = parseInt(selectedChapter.split("chapter")[1]);
  if (sChapter != 1) {
    document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";
  }
  if (clickedbutton == "leftbutton") {
    if (sChapter == 1) {} else if (sChapter > 1 && sChapter <= 10) {
      sChapter = sChapter - 1;
    }
  } else if (clickedbutton == "rightbutton") {
    if (sChapter == 10) {} else if (sChapter >= 1 && sChapter < 10) {
      sChapter = sChapter + 1;
    }
  }
  selectedChapter = "chapter" + sChapter;

  loadonclickimage("chapter" + sChapter + "button");

}

//go to next question when previous one is answered
function loadonclickimage(thisbutton) {
  var elementbutton = document.getElementById(thisbutton);
  var cid = thisbutton.split('button')[0];
  var chapterid = document.getElementById(cid);
  var allchapters = document.getElementsByClassName("hiddenchapter");
  for (var i = 0; i < allchapters.length; i++) {
    allchapters[i].style.display = "none";
  }
  chapterid.style.display = "block";

//show blue dot for question you are on
  var allbuttons = document.getElementsByClassName(elementbutton.className);
  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].src = "images/greydot.jpg";
  }
  elementbutton.src = "images/bluedot.jpg";
  var sChapter = cid.split("chapter")[1];
  selectedChapter = "chapter" + sChapter;
  if (sChapter == "1") {
    document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";
  }
}

//show tag and image when you hover over answer
function tagmouseover(this_id) {
  var thisid = this_id;
  var tagelement = document.getElementById(this_id);
  var elementnaam = tagelement.className.split(" ")[0];
  savedtag = document.getElementById(elementnaam + "tag").innerHTML;
  if (elementnaam=="bedsizes") {
    thisid = thisid + "*200";
  }
  document.getElementById(elementnaam + "tag").innerHTML = thisid;
  if (elementnaam != "typesize") {
    document.getElementById("imageresult").innerHTML = "<img src='images/mattress_" + this_id + ".png' alt='' class='' id='defaultimage' width='100%'>";
  }
}

//don't show tag when mouse has left area
function tagmouseout(this_id) {
  var tagelement = document.getElementById(this_id);
  var elementnaam = tagelement.className.split(" ")[0];
  document.getElementById(elementnaam + "tag").innerHTML = savedtag;
  if (elementnaam != "typesize") {
    document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";

  }
}
