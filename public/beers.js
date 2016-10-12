var beers = angular.module('beers', []);

beers.controller('BeerController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	var url = 'http://api.brewerydb.com/v2/search?&key=c05afdfe4e8b4fe304b0feb8f66e1812b&q=racer5&callback=JSON_CALLBACK&type=beer'
	$scope.$watch('search', function (val){
		if(val) {
			url = 'http://api.brewerydb.com/v2/search?&key=c05afdfe4e8b4fe304b0feb8f66e1812&q='+val+'&callback=JSON_CALLBACK&type=beer';
		}
	})
	$scope.submitFunction = function() {
			location.href = '/#/beerme';
			$http.get(url).success(function(data) {
				// console.log(data.data);
				console.log(data.data);
				var drinks = data.data;
				$scope.search = '';
				$scope.drinks = drinks;
				$scope.name = drinks.name;
				$scope.abv = drinks.abv;
				$scope.ibu = drinks.ibu;
				$scope.type = data.data.style.name;
				$scope.description = drinks.description;
				$scope.subdescription = drinks.style.description;
				if(!$scope.abv) {
					$scope.abv = data.data.style.abvMax;
				}
				if(!$scope.ibu) {
					$scope.ibu = data.data.style.ibuMax;
				}
			});
	}
	$scope.searchme = function(){
		$window.open('https://www.google.com/#q=' + $scope.name +' beer');
	}
}]);

beers.controller('randomizer', function($scope, $http, $window){
	$scope.random = function(){
		console.log('hello');
		$http.get('http://api.brewerydb.com/v2/beer/random?key=c05afdfe4e8b4fe304b0feb8f66e1812').success(function(data){
			console.log(data.data);
			$scope.name2 = data.data.name;
			$scope.abv2 = data.data.abv;
			$scope.ibu2 = data.data.ibu;
			$scope.type2 = data.data.style.name;
			$scope.description2 = data.data.description;
			if(!$scope.description2) {
				$scope.description2 = data.data.style.description
			}
			if(!$scope.abv2) {
					$scope.abv2 = data.data.style.abvMax;
			}
			if(!$scope.ibu2) {
					$scope.ibu2 = data.data.style.ibuMax;
			}
		})
	}
	$scope.searchem = function(){
		$window.open('https://www.google.com/#q=' + $scope.name2 +' beer');
	}
});



