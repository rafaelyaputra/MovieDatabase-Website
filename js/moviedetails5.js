var url_string = new URL(window.location.href);

var movie_id = url_string.searchParams.get("id");

var movies;

var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://api.themoviedb.org/3/movie/"+ movie_id +"?api_key=2a99a4b4a0a58058012b2a60c60d6a21&language=en-US",
	  "method": "GET",
	  "headers": {},
	  "data": "{}"
}

//Create an asynchronous HTTP Request
$.ajax(settings).done(function (response) {

  console.log(response);

  movies= response;

  let x = 0;

  let production = [];

  let budget = movies.budget;
	  
	if(movies.budget == '0'){
	  	budget = 'Not Available'
	}
	else {
		movies.budget = movies.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		budget = "$"+movies.budget;
	}

	for(x=0;x<movies.production_companies.length;x++){
		if(x == 0){
			production.push(movies.production_companies[x].name+"");
		}   
		else if(x != movies.production_companies.length-1){
	  	 	production.push(" "+movies.production_companies[x].name+"");
	  	} else {
	  	 	production.push(" "+movies.production_companies[x].name+".");
		}
	}

	var release_date = new Date(movies.release_date);
	var releasedate = release_date.toLocaleDateString("en-GB");

	var images = "http://image.tmdb.org/t/p/w185/"+movies.poster_path; 
	var image = "<img src="+images+">";

 //Append the table
 $("#MovieDetailsTable").append("<tr><td>"+image+"</td><td>"+movies.title+"</td><td>"+releasedate+"</td><td>"+movies.overview+"</td><td>"+budget+"</td><td id='prod'>"+production+"</td></tr>")
  
});

