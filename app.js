var myApp = angular.module('myApp');

myApp.controller('myController', ['$route', '$http', '$location', '$routeParams', function($route, $http, $location, $routeParams){
	$scope.getUser = function(){
		console.log("myController loaded...")
		$http.get('/person/user').succes(function(response){
			$scope.user = response;
		});
	}
}]);


