window.onload = function() {
  alert(sessionStorage.length);
  for (var i = 0; i < sessionStorage.length; i++){
    document.getElementById("results").innerHTML += "<p>" + sessionStorage.getItem(sessionStorage.key(i)) + "</p>";
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
