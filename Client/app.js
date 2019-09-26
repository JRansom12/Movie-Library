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
                GetMovies();
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

$(document).ready(GetMovies());
function GetMovies(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://localhost:44352/api/movie')
  ourRequest.onload = function functionName() {
    var movieList = JSON.parse(ourRequest.responseText);
      $("#movieTable").find("tr:gt(0)").remove();
    for(i = 0; i < movieList.length; i++){
      $("#movieTable").append("<tr><td>"+ movieList[i].MovieId + "</td><td>"+ movieList[i].Title + "</td><td>" + movieList[i].Genre + "</td><td>" + movieList[i].Director  + "</td></tr>");
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
      $("#movieIdEdit").val(rowData[0])
      $("#titleEdit").val(rowData[1])
      $("#genreEdit").val(rowData[2])
      $("#directorEdit").val(rowData[3]);
  });
});

(function($){
    function editMovie( e ){
        var dict = {
          Id: this["movieIdEdit"].value,
        	Title : this["titleEdit"].value,
        	Genre: this["genreEdit"].value,
          Director: this["directorEdit"].value
        };

        $.ajax({
            url: `https://localhost:44352/api/movie/${this["movieIdEdit"].value}/`,
            dataType: 'json',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                GetMovies();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    }
    $('#my-formTwo').submit( editMovie );
})(jQuery);

$(document).ready(function(){
     $('#search').keyup(function(){
          search_table($(this).val());
     });
     function search_table(value){
          $('#movieTable tr').each(function(){
               var found = 'false';
               $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    {
                         found = 'true';
                    }
               });
               if(found == 'true')
               {
                    $(this).show();
               }
               else
               {
                    $(this).hide();
               }
          });
     }
});
