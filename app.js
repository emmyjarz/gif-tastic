var animals = ["dog", "cat", "bird"];
function renderBtn(){

	$("#showBtn").empty();

for (var i = 0; i<animals.length; i++){

	var newBtn = $("<button>")
	newBtn.attr("data", animals[i]).text(animals[i]).addClass("btn");
	$("#showBtn").append(newBtn);
}
}

$("#addAnimal").on("click", function(event){
	event.preventDefault();
	var newAnimal = $("#animal-input").val().trim();
	animals.push(newAnimal);
	renderBtn();


});
function displayGif(){
	$("#showGif").empty();
	var animal = $(this).attr("data");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(res){
			// console.log(res);
		for(var i = 0; i < res.data.length; i++){
			var newGif = $("<div class ='image'>")
			newGif.html("<p>" + "Rating: " + res.data[i].rating + "</p>" + 
				"<img id='animateId' class ='animateGif' src =" + res.data[i].images.fixed_width_small_still.url + ">");
				$("#showGif").append(newGif);
			// $(this).attr("src", "res.data[i].images.fixed_width_small.url");
		}	// $(this).attr()
		$(".animateGif").on("click", function(){
			var animateLink = $(this)[0].currentSrc;
			var newanimateLink = animateLink.replace("_s", "");
			console.log(newanimateLink);
			$(".animateGif").html("<img class ='animateGif' src =" + newanimateLink + ">");

			// console.log($(this));			
			console.log(newanimateLink);
			});

	});	
			// animate(i);
	
		

}
		
			 
			//console.log(res.data.length);
			
			//console.log(res.data[0].images.downsized.url);
			// console.log(res.data[0].rating);
			//console.log(res.data[0].images.fixed_width_small.url)



	
		

	








function animate(i){

}
$(document).on("click", ".btn", displayGif);
renderBtn();

