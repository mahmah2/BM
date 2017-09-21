angular.module('BM.controllers').
	controller('houseController', function ($scope, $rootScope, $stateParams) {
		var vm = this;

		vm.id = $stateParams.id;

		vm.expenses = [
			{ id: 1, type: "levy"       , amount: "12.50", state : "unpaid", description: "Jan 2017" , dueDate : "24/09/2017"},
			{ id: 2, type: "landscaping", amount: "22.50", state : "unpaid", description: "Jun 2017" , dueDate : "22/09/2017"},
			{ id: 3, type: "levy"       , amount: "56.50", state : "paid"  , description: "Sep 2017" , dueDate : "23/09/2017"},
			{ id: 4, type: "levy"       , amount: "88.50", state : "paid"  , description: "Q4 2017"  , dueDate : "25/10/2017"}
		];
		

	});