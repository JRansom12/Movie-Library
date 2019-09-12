(function($){
    function processPost( e ){
        var dict = {
        	Title : this["title"].value,
        	Genre: this["genre"].value,
          Director: this["director"].value
        };
        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
                GetMovies();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    }
    $('#my-form').submit( processPost );
})(jQuery);



var movieContainer = document.getElementById("movieInfo");

$(document).ready(GetMovies());
function GetMovies(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
    renderHTML(movieList);
    console.log(movieList);
  }
    ourRequest.send();
function renderHTML(data){
  var movieString = "";
  for(i = 0; i < data.length; i++){
    movieString += "<p>" + data[i].Title + " " + data[i].Genre + " " + data[i].Director + "</p>";
  }
  movieContainer.insertAdjacentHTML('beforeend', movieString);
}

window.addEventListener("load", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
    renderHTML(movieList);
  }
  ourRequest.send();
var perrow = 3,
    html = "<table><tr>";
for (var i=0; i<movieList.length; i++) {
  html += "<td>" + "movieList[i].Title" + "</td>";
  var next = i+1;
  if (next%perrow==0 && next!=data.length) {
    html += "</tr><tr>";
  }
}
html += "</tr></table>";
document.getElementById("container").innerHTML = html;

var getData = new XMLHttpRequest();
getData.open('GET', 'https://localhost:44352/api/movie')
getData.onload = function gettingMovies(){
  var movies = JSON.parse(getData.reponseText);
  console.log(movies);
};
getData.send();

function gettingMovies(){
  $.ajax({
    url: "https://localhost:44352/api/movie",
    type: "get",
    dataType: "json",
    async: true,
    data: JSON,
    success: function(movies){
      console.log();
    },
  });
}



function addMovie(movies){
  $.ajax({
    url: "https://localhost:44352/api/movie",
    type: "post",
    contentType: "JSON",
    data: JSON.stringify(product),
    success: function(movie){
      movieAddSuccess(movie);
    },
  });
}


function updateMovie(movies) {
  $.ajax({
    url: "https://localhost:44352/api/movie",
    type: "PUT",
    contentType: "application/json;charset=utf-8",
    data: JSON.stringify(movie),
    success: function (movie) {
      productUpdateSuccess(movie);
    },
  });
}



function deleteMovie(ctl) {
  let id = $(ctl).data("id");
  $.ajax({
    url: "https://localhost:44352/api/movie" + id,
    type: 'DELETE',
    success: function (movie) {
      $(ctl).parents("tr").remove();
    },
  });
}
