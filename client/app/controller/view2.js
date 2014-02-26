define([], function (){
	 return function ($scope){
			$scope.yourName = 'view2';
			$scope.double = function(value) { return value * 3; };
		};
});
