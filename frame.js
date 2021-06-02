var $win = $(window);
var $lay = $('#layout');
var baseSize = {
    w: 960,
    h: 600
}

function updateScale() {

    var ww = $win.width();
    var wh = $win.height();
    var newScale = 1;

    // compare ratios
    if(ww/wh < baseSize.w/baseSize.h) { // tall ratio
        newScale = ww / baseSize.w;
    } else { // wide ratio
        newScale = wh / baseSize.h;
    }

    $lay.css('transform', 'scale(' + newScale + ',' +  newScale + ')');

    console.log(newScale);
}

$(window).resize(updateScale);


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
