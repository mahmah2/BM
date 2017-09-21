angular.module('BM.controllers').
	controller('mainController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

		var vm = this;

		vm.complexes = [
			{id : 1, logoImage : "img/house.png" , title : "Complex 1" , description : "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."} ,
			{id : 2, logoImage : "img/house.png" , title : "C2"        , description : "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."} ,
			{id : 3, logoImage : "img/house.png" , title : "Complex 3" , description : "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."} ,
			{id : 4, logoImage : "img/house.png" , title : "Complex 4" , description : "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."}
		];

		$rootScope.$on('BM.OnSuccessLogin', function () {
			$state.go('/');
		});

		
	}]);

