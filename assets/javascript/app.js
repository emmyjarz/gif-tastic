var animals = ["dog", "cat", "bird", "parrot", "horse", "dolphin"];

//create button
function renderBtn(){

	$("#showBtn").empty();
	$("#animal-input").val("");



for (var i = 0; i<animals.length; i++){

	var newBtn = $("<button>")
	newBtn.addClass("clickBtn").attr("data", animals[i]).text(animals[i]);
	$("#showBtn").append(newBtn);
}
}

//add new button

$("#addAnimal").on("click", function(event){
	event.preventDefault();
	var newAnimal = $("#animal-input").val().trim();
	animals.push(newAnimal);
	renderBtn();


});

//display
function displayGif(){
	$("#showGif").empty();
	var animal = $(this).attr("data");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dc6zaTOxFJmzC";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(res){
		//show gif from query
		for(var i = 0; i < res.data.length; i++){
			var newGif = $("<div class ='image'>")
			var rating = "<p>" + "Rating: " + res.data[i].rating + "</p>"
			var eachImg = $("<img>");
			eachImg.addClass("imgGif").attr("src", res.data[i].images.fixed_height_still.url);
			eachImg.attr("data-state", "still");
			eachImg.attr("data-still", res.data[i].images.fixed_height_still.url);
			eachImg.attr("data-animate", res.data[i].images.fixed_height.url);
			newGif.append(rating);
			newGif.append(eachImg);
				$("#showGif").append(newGif);
		}

	//any image got clicked then toggle
		$(".imgGif").on("click", function(){

				var state = $(this).attr("data-state")
			if(state === "still"){
				$(this).attr("src", $(this).attr("data-animate"));
				$(this).attr("data-state", "animate");
			}else{
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state", "still");
			}
		});
	});
}

//any button that clicked then displayGif
$(document).on("click", ".clickBtn", displayGif);
renderBtn();
