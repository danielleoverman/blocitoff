(function() {
    function ActiveCtrl($scope, $firebaseArray) {      
        var ref = firebase.database().ref();
        
        $scope.tasks = $firebaseArray(ref);
        
        $scope.addTask = function() {
            var name = $scope.task; 
            var created = $scope.createdAt;
            var priority = $scope.priority
            $scope.tasks.$add({
                name: $scope.task,
                created: firebase.database.ServerValue.TIMESTAMP,
                priority: $scope.priority
            });

        $scope.task = "";
        };

        $scope.expiredTask = function(task) {
           var createdTime = new Date();
           if ((createdTime - task.created) >= 604800000){
               return true;
           } 
           else {
               return false;
           }
        };
    }

    angular
        .module('blocitoff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl])
})();
