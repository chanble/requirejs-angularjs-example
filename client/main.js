require.config({
  paths: {
	'angular': 'app/lib/angular',
	'angular-ui-route': 'app/lib/angular-ui-router',
	'jquery': 'app/lib/jquery'
  },
  shim:	{
	'angular' : {'exports' : 'angular'},
	'angular-ui-route': {'deps': ['angular'], 'exports': 'angular-ui-route'},
	'jquery': {'exports': 'jQuery'}
  }
});
requirejs(['angular', 'jquery', 'app/myApp'],
function (angular, $, myApp) {
	$(function (){
		angular.bootstrap(document, [myApp.name]);
	});
});
