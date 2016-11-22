(function () {
    angular
        .module('app')
        .controller('dataRequestFormCtrl', getRequestForm);

    getRequestForm.$inject = ['$scope'];
    
    function getRequestForm($scope){
        var vm = this;
        vm.dataRequestForm = {};
    }

})();
