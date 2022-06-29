// SEARCH FIELD

let query = document.getElementById("input");
let searchBtn = document.getElementById("search-btn");

searchBtn.onclick = function () {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");

  query.value = "";
};
