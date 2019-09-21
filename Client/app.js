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
        GetMovies();
    }
    $('#my-form').submit( processForm );
})(jQuery);

$(document).ready(GetMovies());
function GetMovies(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
      $("#movieTable").find("tr:gt(0)").remove();
    for(i = 0; i < movieList.length; i++){
      $("#movieTable").append("<tr><td>"+ movieList[i].Title + "</td><td>" + movieList[i].Genre + "</td><td>" + movieList[i].Director  + "</td></tr>");
    }
    console.log(movieList);
  }
    ourRequest.send();
  }

$( document ).ready(function() {
  $("#movieTable tbody").on('click', 'tr', function() {
      var rowData = $(this).children("td").map(function() {
          return $(this).text();
      }).get();
      $("#titleEdit").val(rowData[0])
      $("#genreEdit").val(rowData[1])
      $("#directorEdit").val(rowData[2]);
  });
});



function GetMovieToEdit(){
  alert("Movies yeah yeah");
  var movieToEdit = movies.filter(function(el){
    if (person.id == el.movies){
      return true;
    } else {
      return false;
    }
  });
  return movies[i];
}

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
            type: 'PUT',
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
