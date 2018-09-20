$(document).ready(function () {
    
    //if the start button is clicked
    $('#search').on('click', function(){
        searchAjax();        
    })

function searchAjax(){
    var q = $('#searchTerm').val(); 
    var fq = $('#records').val();
    var beginDate= $('#startYear').val();
    var endDate = $('#endYear').val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': "b7e4aad889aa48b0a96120aba4672222",
        'q': 'dogs',
        // 'fq': fq,
        // 'begin_date': beginDate,
        // 'end_date': endDate,
    });


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
// var article = response.response.docs;
// for( i = 0; i < fq; i++){
    
//     $("#theArticle").append(article[i].abstract);
// }
        
      });
  
}
   


    
})