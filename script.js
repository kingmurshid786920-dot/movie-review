function searchMovies() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var cards = document.getElementsByClassName("movie-card");
  
  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
