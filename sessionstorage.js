window.onload = function() {if (typeof(Storage) !== "undefined") {
  // Store
  sessionStorage.setItem("firstname", "igor");
  // Retrieve
  var lastname = sessionStorage.getItem("lastname");
  document.getElementById("right").innerHTML = "<p>" + lastname + "</p>";

} else {
  document.getElementById("right").innerHTML = "Sorry, your browser does not support Web Storage...";
}
};
