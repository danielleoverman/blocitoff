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
                priority: $scope.priority,
                state: "active",
                complete: false 
            });

        $scope.task = "";
        };

        $scope.expiredTask = function(task) {
           var createdTime = new Date();
           if ((createdTime - task.created) >= 60000){
               return true;
           } 
           else {
               task.state = "expired"
               $scope.tasks.$save(task);
               return false;
           }
        };

        $scope.completedTask = function(task){
            task.complete = true;
            $scope.tasks.$save(task);
        };
    }

    angular
        .module('blocitoff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl])
})();
