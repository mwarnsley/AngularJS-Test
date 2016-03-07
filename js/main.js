var info = [
    {
        domain: 'facebook.com',
        status: "Grow your current relationship",
        image_url: "http://i.telegraph.co.uk/multimedia/archive/03474/Facebook_3474124b.jpg"
    },
    {
        domain: 'instagram.com',
        status: "Create a new relationship",
        image_url: "http://marketingland.com/wp-content/ml-loads/2014/07/instagram-iphone-app-1920.jpg"
    },
    {
        domain: 'snapchat.com',
        status: "Grow your current relationship",
        image_url: "http://media3.popsugar-assets.com/files/2015/11/10/090/n/1922398/74f83cd48e2f90c8_11311496_779715442138490_1431060595_n.xxxlarge/i/Celebrities-Follow-Snapchat.jpg"
    },
    {
        domain: 'twitter.com',
        status: "Create a new relationship",
        image_url: "http://i.telegraph.co.uk/multimedia/archive/03375/twitter2_3375790k.jpg"
    }
];

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

myApp.directive('myFirstDirective', function(){
        return{
            template: "<p>this is some content</p>",
            restrict: "E"
        }
});