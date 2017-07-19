(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
 
        $stateProvider
            .state('active', {
                url: '/',
                controller: 'ActiveCtrl as active',
                templateUrl: '/templates/active.html'
            });
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
    
})();