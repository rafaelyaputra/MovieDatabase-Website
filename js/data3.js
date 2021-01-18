
function getmovies(){
	loadmovie()
}

function loadmovie(){


	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=2a99a4b4a0a58058012b2a60c60d6a21",
	  "method": "GET",
	  "headers": {},
	  "data": "{}"
	}

	$.ajax(settings).done(function (response) {
	  
	  console.log(response);

	  movies = response;

	  let x=0;

	  //Append the table continuously
	  for(x=0;x<movies.results.length;x++){
	  	var images = "http://image.tmdb.org/t/p/w185/"+movies.results[x].poster_path; 
		var image = "<img src="+images+">"; 
		var release_date = new Date(movies.results[x].release_date);
		var releasedate = release_date.toLocaleDateString("en-GB");  

	  	$("#tableNowPlaying").append("<tr><td id='movieimg'>"+image+"</td><td>"+movies.results[x].title+"</td><td>"+releasedate+"</td><td><button id='"+movies.results[x].id+"' onclick='movePage(this)'>"+"Click for More!"+"</button></td></tr>");
	  	
	  }
	  
	})

}

//Move Page
function movePage(parameter){
	let movieid = parameter.getAttribute("id");
	window.location.href = "movieDetails.html?id="+movieid;

}