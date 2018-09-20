$(document).ready(function () {
    
    //if the start button is clicked
    $('#search').on('click', function(){
        searchAjax();        
    })

function searchAjax(){
    var q = $('#search-box').val(); console.log(q)
    var fq = $('#recordsBox').val();
    var beginDate= $('#startYearbox').val();
    var endDate = $('#endYearbox').val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': "b7e4aad889aa48b0a96120aba4672222",
        'q': q,
        'fq': fq,
        'begin_date': beginDate,
        'end_date': endDate,
    });


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        // var article = response.docs.lengths;
        
        for( i = 0; i < response.docs.length; i++){
    
            $("#theArticle").append(resonse.docs[i].headline);
        }
        
      });
  
}
   


    
})