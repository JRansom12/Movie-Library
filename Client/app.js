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

<<<<<<< HEAD
$(document).ready(GetMovies());
function GetMovies(){
=======
    $('#my-form').submit( processForm );
})(jQuery);


var movieContainer = document.getElementById("movieInfo")
var movieList = [];
// document.getElementById("btn").addEventListener("click", function(){
>>>>>>> 37e67da9b83bee0f8c429fe94b589ac62ae0449c
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
<<<<<<< HEAD
      $("#movieTable").find("tr:gt(0)").remove();
    for(i = 0; i < movieList.length; i++){
      $("#movieTable").append("<tr><td>" + movieList[i].Title + "</td><td>" + movieList[i].Genre + "</td><td>" + movieList[i].Director  + "</td></tr>");
    }
    console.log(movieList);
  }
    ourRequest.send();
  }
=======
    renderHTML(movieList);
  }
  ourRequest.send();
//});

function renderHTML(data){
  var movieString = "";
  for(i = 0; i < data.length; i++){
    movieString += "<p>" + data[i].Title + " " + data[i].Genre + " " + data[i].Director + "</p>";
  }
  movieContainer.insertAdjacentHTML('beforeend', movieString);
}










(function($){
    function processForm( e ){
        var movies = {
        	Title : this["title"].value,
        	Genre: this["genre"].value,
          Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( movie );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);

function GetMovieToEdit(){
  var movieToEdit = movies.filter(function(el){
    if (person.id == el.movies){
      return true;
    } else {
      return false;
    }
  });
  return movies[i];
}



























// window.addEventListener("load", function(){
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET', 'https://localhost:44352/api/movie')
//   ourRequest.onload = function functionName() {
//     var movieList = JSON.parse(ourRequest.responseText);
//     renderHTML(movieList);
//   }
//   ourRequest.send();
// var perrow = 3,
//     html = "<table><tr>";
// for (var i=0; i<movieList.length; i++) {
//   html += "<td>" + "movieList[i].Title" + "</td>";
//   var next = i+1;
//   if (next%perrow==0 && next!=data.length) {
//     html += "</tr><tr>";
//   }
// }
// html += "</tr></table>";
//
// document.getElementById("container").innerHTML = html;
// var getData = new XMLHttpRequest();
// getData.open('GET', 'https://localhost:44352/api/movie')
// getData.onload = function gettingMovies(){
//   var movies = JSON.parse(getData.reponseText);
//   console.log(movies);
// };
// getData.send();

// function gettingMovies(){
//   $.ajax({
//     url: "https://localhost:44352/api/movie",
//     type: "get",
//     dataType: "json",
//     async: true,
//     data: JSON,
//     success: function(movies){
//       console.log();
//     },
//   });
// }
//
// //
//
// function addMovie(movies){
//   $.ajax({
//     url: "https://localhost:44352/api/movie",
//     type: "post",
//     contentType: "JSON",
//     data: JSON.stringify(product),
//     success: function(movie){
//       movieAddSuccess(movie);
//     },
//   });
// }
//
//
// function updateMovie(movies) {
//   $.ajax({
//     url: "https://localhost:44352/api/movie",
//     type: "PUT",
//     contentType: "application/json;charset=utf-8",
//     data: JSON.stringify(movie),
//     success: function (movie) {
//       productUpdateSuccess(movie);
//     },
//   });
// }
//
//
//
// function deleteMovie(ctl) {
//   let id = $(ctl).data("id");
//   $.ajax({
//     url: "https://localhost:44352/api/movie" + id,
//     type: 'DELETE',
//     success: function (movie) {
//       $(ctl).parents("tr").remove();
//     },
//   });
// }
// });
>>>>>>> 37e67da9b83bee0f8c429fe94b589ac62ae0449c
