(function () {
    angular
        .module('app')
        .controller('AppController', AppController);
    
    AppController.$inject = ['$scope'];
    
    function AppController($scope){
        $scope.today = new Date();
        $scope.todos = [ ];

        $scope.addToDo = function() {

            if($scope.fieldToDo !== "") {
                $scope.todos.push({text: $scope.fieldToDo, done: false});
                $scope.fieldToDo = "";
            } else {
                $scope.empty = "Please, write what you should do";
            }

        };
    }

})();
