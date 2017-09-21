var BM = angular.module("BM", [
	"ngMaterial",
	"ui.router",
	"BM.controllers",
	"BM.services"
]);

angular.module('BM.controllers', []);
angular.module('BM.services', []);


BM.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider.state('/', {
		//controller: 'loginController',
		templateUrl: 'Scripts/Main/main.html',
		url: ''
	})

	var loginState = {
		name: 'login',
		url: '/login',
		templateUrl: 'Scripts/Login/login.html'
	}


	var aboutState = {
		name: 'about',
		url: '/about',
		template: '<h3>BM app!</h3>'
	}

	//we can use nested states here 
	//https://stackoverflow.com/questions/20482051/how-to-set-a-default-state-with-angular-ui-router

	$stateProvider.state(loginState);
	$stateProvider.state(aboutState);
});

