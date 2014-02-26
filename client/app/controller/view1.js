define([], function (){
	 return function ($scope){
			$scope.yourName = 'world';
			$scope.double = function(value) { return value * 2; };
		};
});
