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


$(document).ready(GetMovies());
function GetMovies(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
      $("#movieTable").find("tr:gt(0)").remove();
    for(i = 0; i < movieList.length; i++){
      $("#movieTable").append("<tr><td>" + movieList[i].Title + "</td><td>" + movieList[i].Genre + "</td><td>" + movieList[i].Director  + "</td></tr>");
    }
    console.log(movieList);
  }
    ourRequest.send();
  }
