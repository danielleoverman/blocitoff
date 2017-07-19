(function() {
    function HomeCtrl($scope, $firebaseArray) {
        var ref = new Firebase("https://blocitoff-e4d94.firebaseio.com");
        $scope.tasks = $firebaseArray(ref);

        $scope.addTask = function() {
            var name = $scope.task; 
            $scope.tasks.$add({
            name: $scope.task,
            created_at: Firebase.ServerValue.TIMESTAMP,
        });

        $scope.task = "";
        };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl])
    ;
})();
