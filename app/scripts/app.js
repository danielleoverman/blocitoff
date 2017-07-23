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
        
        $stateProvider
            .state('history', {
                url: '/history',
                controller: 'HistoryCtrl as history',
                templateUrl: '/templates/history.html'
            });
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
    
})();