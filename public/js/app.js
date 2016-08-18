var app = angular.module("final", ["ngRoute"]);
app.controller("bookCtrl", function($scope) {
	// console.log('bookCtrl is running');
			
	// $scope.travelArray = [];
	// // var googleArray = [];
	
	$.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&literature&filter=ebooks&filter=country:%22US%22&filter=language:%22en%22&key=AIzaSyAJftG-6xohzNBWmVwBJ4qW3Rd5Hqm9A6Y", function(fiction) {
	$scope.googleArray=fiction.items;
	console.log($scope.googleArray);
		});
	// fiction.forEach(function(item){
	// 	$scope.travelArray.push(item);
	//  	console.log(travelArray);

	// });
		// googleArray = fiction.items;
	

	// 		var theArray = [];
	// $.get("https://www.googleapis.com/books/v1/volumes?q=subject:humor&%20&filter=ebooks&filter=country:%22US%22&filter=language:%22en%22&key=AIzaSyAJftG-6xohzNBWmVwBJ4qW3Rd5Hqm9A6Y", function(funny) {
	// 	theArray = funny.items;
	// 	console.log(theArray);
	// });

	// $scope.travelArray = googleArray.concat(theArray);
	// console.log($scope.travelArray);

	$scope.clickFunction = function() {

		console.log('clickFunction in bookCtrl is running');

		for(var i = 0; i < $scope.googleArray.length; i++) {
			console.log('forloop is running in clickFunction');
			var item = $scope.googleArray[i].volumeInfo.title;
			console.log(item);
			var image = $scope.googleArray[i].volumeInfo.imageLinks.thumbnail;
			console.log(image);
			var author = $scope.googleArray[i].volumeInfo.authors[0];
			console.log(author);
			var description = $scope.googleArray[i].volumeInfo.description;
			console.log(description);
			var pages = $scope.googleArray[i].volumeInfo.pageCount;
			console.log(pages);
			var pic = $scope.googleArray[i].volumeInfo.imageLinks.thumbnail;
			console.log(pic);
			var site =$scope.googleArray[i].accessInfo.webReaderLink;
			console.log(site);
			var inputHours = $("#hourSelect").val();
		
			// if((inputHours === "oneTo4") && pages <= 180) {
			// 	console.log('180 or less');
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
			// 	$(".books").append(title, writer, pg, describe);



			// if((inputHours === "oneTo4") && pages <= 180) {
			// 	console.log('180 or less');
			// 	// first i need to create an h2 , 
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + pages + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
				// var pic = $("<p>"+image+"</p>");
				// second set the content of h2 to the item
				// append h2 to books class
				// when you test it out comment out the books line so I can see it on the page
				// do this for all of the ones in the line and add images and url
				// $(".books").append(title, writer, pg, describe);
			
			if((inputHours === "fourTo6") && pages <= 260) {
				console.log('260 or less');
				var title = $("<h2>" + item + "</h2>");
				var writer = $("<h3>" + author + "</h3>");
				var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
				var describe = $("<p>" + description + "</p>");
				var picture = $("<img>").attr("src", pic);
				var web = $("<a />").attr("href", site);
				$(".books").append(title, writer, pg, describe, picture, web);

			// } else
			// if((inputHours === "fourto6") && pages <= 260 && pages > 180) {
			// 	console.log('260 or less');
			// 	// first i need to create an h2 , 
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + pages + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
			// 	// var pic = $("<p>"+image+"</p>");
			// 	// second set the content of h2 to the item
			// 	// append h2 to books class
			// 	// when you test it out comment out the books line so I can see it on the page
			// 	// do this for all of the ones in the line and add images and url
			// 	$(".books").append(title, writer, pg, describe);

			} else if((inputHours === "sixTo8") && pages <= 360 && pages > 260) {
				console.log('360 or less');
				var title = $("<h2>" + item + "</h2>");
				var writer = $("<h3>" + author + "</h3>");
				var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
				var describe = $("<p>" + description + "</p>");
				var picture = $("<img>").attr("src", pic);
				var web = $("<a />").attr("href", site);
				$(".books").append(title, writer, pg, describe, picture, web);

			} else if((inputHours === "eightTo10") && pages <= 460 && pages > 360) {
				console.log('460 or less');
				var title = $("<h2>" + item + "</h2>");
				var writer = $("<h3>" + author + "</h3>");
				var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
				var describe = $("<p>" + description + "</p>");
				var picture = $("<img>").attr("src", pic);
				var web = $("<a />").attr("href", site);
				$(".books").append(title, writer, pg, describe, picture, web);

			// } else if((inputHours === "eightto10") && pages <= 460 && pages > 360) {
			// 	console.log('460 or less');
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + pages + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
			// 	$(".books").append(title, writer, pg, describe);

			// } else if((inputHours === "twelveTo14") && pages <= 660 && pages > 560) {
			// 	console.log('660 or less');
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + pages + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
			// 	$(".books").append(title, writer, pg, describe);
				} else if((inputHours === "tenTo12") && pages <= 600 && pages > 460) {
				console.log('600 or less');
				var title = $("<h2>" + item + "</h2>");
				var writer = $("<h3>" + author + "</h3>");
				var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
				var describe = $("<p>" + description + "</p>");
				var picture = $("<img>").attr("src", pic);
				var web = $("<a />").attr("href", site);
				$(".books").append(title, writer, pg, describe, picture, web);


				}else if((inputHours === "twelveTo14") && pages <= 760 && pages > 600 ) {
				console.log('760 or less');
				var title = $("<h2>" + item + "</h2>");
				var writer = $("<h3>" + author + "</h3>");
				var pg = $("<h4>" + "This book has " + pages + " many pages." + "</h4>");
				var describe = $("<p>" + description + "</p>");
				var picture = $("<img>").attr("src", pic);
				var web = $("<a></a>").attr("href", site).append("Buy");
				$(".books").append(title, writer, pg, describe, picture, web);

			// } else if((inputHours === "fourteenTo16") && pages <= 760 && pages > 660) {
			// 	console.log('760 or less');
			// 	var title = $("<h2>" + item + "</h2>");
			// 	var writer = $("<h3>" + author + "</h3>");
			// 	var pg = $("<h4>" + pages + "</h4>");
			// 	var describe = $("<p>" + description + "</p>");
			// 	$(".books").append(title, writer, pg, describe);

			} else {
				console.log('Please Select a Range');
			}
		};
	};

});


app.directive("bookElement", function(){
	return {
		restrict: "AE",
		templateUrl: "partials/home.html"
	};
});

