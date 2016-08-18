var app = angular.module("final");

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "partial/home.html",
		controller: "bookCtrl"
	});
});