define(['angular','angular-ui-route', 'app/controller/view1', 'app/controller/view2']
,function (angular,uiRouter, view1, view2){
	var myApp = angular.module('myApp',['ui.router'])
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$url){
			$url.otherwise("");
			$stateProvider.state('index', {
				url: '',
				templateUrl: 'view1.html',
				controller: view1
			})
			.state('view2', {
				url: '/view2',
				templateUrl: 'view2.html',
				controller: view2
			})
			.state('view1', {
				url: '/view1',
				templateUrl: 'view1.html',
				controller: view1
			});
		}])
		;
		return myApp;
});
