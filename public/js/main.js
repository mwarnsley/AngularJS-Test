var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('views', {
                url: '/views',
                templateUrl: 'templates/views.html'
            })
            .state('views.opportunities', {
                url: '/opportunities',
                templateUrl: 'templates/opportunities.html'
            })
            .state('views.about', {
                url: '/about',
                templateUrl: 'templates/about.html'
            });
        $urlRouterProvider.otherwise("/views/about");
});

myApp.directive('myFirstDirective', function($scope){
        return {
            restrict: "E",
            template: "<p></p>"
        }
});