var app = angular.module('sApplication', [])
    .controller('sControler', function($scope) {
        $scope.stdList = [{
            sName: 'Гоян Анна',
            note110: 7, 
            done:false
        }];
    
        $scope.sAdd = function() {
            $scope.stdList.push({
                sName:$scope.sName, 
                note110:$scope.note110,
                done:false});
            $scope.sName = ""; 
        
            $scope.note110 = ""; 
        };
    
        $scope.remove = function() {
            var oldList = $scope.stdList;
            $scope.stdList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.stdList.push(x);
            });
        };
    });