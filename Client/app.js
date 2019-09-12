(function($){
    function processForm( e ){
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
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);


var movieContainer = document.getElementById("movieInfo")
var movieList = [];
document.getElementById("btn").addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
    renderHTML(movieList);
  }
  ourRequest.send();
});

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

function gettingMovies(){
  $.ajax({
    url: "https://localhost:44352/api/movie",
    type: "get",
    dataType: "json",
    async: true,
    data: JSON,
    success: function(movies){
      movieListSuccess(movie);
    },
    error: function(request, message, error){
      handleException(request, message, error);
    }
  });
}



function addMovie(movies){
  $.ajax({
    url: "/api/Movie",
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
    url: "/api/Movie",
    type: 'PUT',
    contentType:
       "application/json;charset=utf-8",
    data: JSON.stringify(movie),
    success: function (movie) {
      productUpdateSuccess(movie);
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
  });
}



function deleteMovie(ctl) {
  var id = $(ctl).data("id");

  $.ajax({
    url: "/api/Movie" + id,
    type: 'DELETE',
    success: function (movie) {
      $(ctl).parents("tr").remove();
    },
    error: function (request, message, error) {
      handleException(request, message, error);
    }
  });
}
});
