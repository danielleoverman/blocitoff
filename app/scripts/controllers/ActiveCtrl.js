(function() {
    function ActiveCtrl($scope, $firebaseArray) {      
        var ref = firebase.database().ref();
        
        $scope.tasks = $firebaseArray(ref);
        
        $scope.addTask = function() {
            var name = $scope.task; 
            $scope.tasks.$add({
            name: $scope.task,
            });

        $scope.task = "";
        };
    }

    angular
        .module('blocitoff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl])
})();
