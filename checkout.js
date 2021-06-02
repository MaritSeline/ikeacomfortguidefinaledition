
window.onload = function() {
  document.getElementById("titlerec").textContent = localStorage.getItem("name");
  document.getElementById("selectedmattrass").src = "images/" + localStorage.getItem("name") + "_section.png";
}
