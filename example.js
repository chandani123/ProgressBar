var app = angular.module('myApp', ['ui.bootstrap','ngAnimate']);

app.controller("MainCtrl",['$scope', function ($scope) {

    
	$scope.progressbar = '1';
	$scope.counter1 = 30;
	$scope.counter2 = 50;
	$scope.counter3 = 70;
	$scope.max = 100;
	$scope.dynamic1 = 30;
	$scope.dynamic2 = 50;
	$scope.dynamic3 = 70;
	
	
    $scope.increment = function(val){
        var types = ['danger', 'warning', 'info', 'success']
		
		if($scope.progressbar == 1)
		{
			$scope.counter1 = $scope.counter1 + val;
			$scope.dynamic1 = Math.round($scope.counter1 / $scope.max * 100);
			if($scope.counter1 > 100)
			{
				$scope.type1 = types[0];
			}
			else
			{
				$scope.type1 = types[2];
			}
			$scope.counter1 = parseInt($scope.counter1);
		}
		if($scope.progressbar == 2)
		{
			$scope.counter2 = $scope.counter2 + val;
			$scope.dynamic2 = Math.round($scope.counter2 / $scope.max * 100);
			if($scope.counter2 > 100)
			{
				$scope.type2 = types[0];
			}
			else
			{
				$scope.type2 = types[2];
			}
		}
		if($scope.progressbar == 3)
		{
			$scope.counter3 = $scope.counter3 + val;
			$scope.dynamic3 = Math.round($scope.counter3 / $scope.max * 100);
			if($scope.counter3 > 100)
			{
				$scope.type3 = types[0];
			}
			else
			{
				$scope.type3 = types[2];
			}
		}
    }
}]);