
window.onload = function() {
  document.getElementById("titlerec").textContent = localStorage.getItem("name");
  document.getElementById("selectedmattrass").src = "images/" + localStorage.getItem("name") + "_section.png";
  document.getElementById("pricerec").textContent = localStorage.getItem("price");
  document.getElementById("matchrec").textContent = localStorage.getItem("tags");

  document.getElementById(localStorage.getItem("name")).style.display = "block";





}
