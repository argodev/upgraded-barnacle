angular
    .module('app')
    .controller('LogCtrl', LogCtrl)

LogCtrl.$inject = ['$scope', '$http'];
function LogCtrl($scope, $http) {

    $scope.sortType = "Title";
    $scope.sortReverse = false;

    // get our data from the server
    $http.get('/api/sampledb').success(function(remote_data) {
        $scope.data = remote_data;
    })
}