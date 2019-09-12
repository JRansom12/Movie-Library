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
}
