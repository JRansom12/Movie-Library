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
