var selectedChapter = "chapter1";
var savedtag = "";

function nextQuestion(clicked_id) {
  var cName = document.getElementById(clicked_id);
  var skip = false;
  var chapterboolean = false;
  if(cName.className.includes("skip"))
  {
    classnaam = cName.className.split(" ", 1);
    skip = true;
  }
  else {
    classnaam = cName.className;
  }
  var classnamen = cName.className.split(" ");

  if (classnamen[1] == "chapter1"){
    document.getElementById("left").style.width = "70%";
    document.getElementById("right").style.display = "block";
    document.getElementById("progressbar").style.width = "70%";
  }
  classnamen = cName.className.split(" ");
  sessionStorage.setItem(classnamen[0], clicked_id);
  var storage = sessionStorage.getItem(classnamen[0]);
  document.getElementById(classnamen[0]+"tag").innerHTML = storage;
  savedtag = storage;
  document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";
  otherChapter("rightbutton");
}

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
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);

  var image = score.indexOf(Math.max(...score));
  if(clicked_id=="rangelength"){
  document.getElementById("right").innerHTML = "<img src='images/" + names[image] + "lengte.jpg' style='max-width:100%; max-height:100%;'/>";
}
}

function otherChapter(clickedbutton) {
  var sChapter = parseInt(selectedChapter.split("chapter")[1]);
  if(clickedbutton == "leftbutton")
  { if(sChapter == 1){  }
    else if(sChapter >1 && sChapter<=9){
      sChapter = sChapter - 1;
    }
  }
  else if(clickedbutton == "rightbutton")
  { if(sChapter == 9){  }
    else if(sChapter >=1 && sChapter<9){
      sChapter = sChapter + 1;
    }
  }
  selectedChapter = "chapter" + sChapter;
  loadonclickimage("chapter" + sChapter + "button");


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
  var sChapter = cid.split("chapter")[1];
  selectedChapter = "chapter" + sChapter;
}

function tagmouseover(this_id){
  var tagelement = document.getElementById(this_id);
  var elementnaam = tagelement.className.split(" ")[0];
  savedtag = document.getElementById(elementnaam + "tag").innerHTML;
  document.getElementById(elementnaam + "tag").innerHTML = this_id;
  if(elementnaam != "typesize"){
  document.getElementById("imageresult").innerHTML = "<img src='images/mattress_"+ this_id + ".png' alt='' class='' id='defaultimage' width='100%'>";
  }
}
function tagmouseout(this_id){
  var tagelement = document.getElementById(this_id);
  var elementnaam = tagelement.className.split(" ")[0];
  document.getElementById(elementnaam + "tag").innerHTML = savedtag;
  document.getElementById("imageresult").innerHTML = "<img src='images/mattress.png' alt='' class='' id='defaultimage' width='100%'>";
}
