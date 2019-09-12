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
            type: 'post',
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

    $('#my-form').submit( gettingMovies );
})(jQuery);



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
