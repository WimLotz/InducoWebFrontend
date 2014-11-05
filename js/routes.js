(function () {

    var inducoRoutes = function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider
            .when('/', {controller: 'HomeController', templateUrl: 'views/templates/home.html'})
            .when('/createUser',{controller: 'CreateUserController', templateUrl: 'views/templates/create_user.html'})
            .when('/profile', { controller: 'ProfileController', templateUrl: 'views/templates/profile.html'})
            .when('/createPersonalProfile', { controller: 'CreatePersonProfileController', templateUrl: 'views/templates/create_person_profile.html'})
            .when('/createCompanyProfile', { controller: 'CreateCompanyProfileController', templateUrl: 'views/templates/create_company_profile.html'})
            .when('/search', {controller: 'SearchController', templateUrl: 'views/templates/search.html'})
            .when('/dashboard', {controller: 'DashboardController', templateUrl: 'views/templates/dashboard.html'})
            .otherwise({ redirectTo: '/'});
    };

    inducoRoutes.$inject = ['$routeProvider', '$httpProvider'];

    angular.module('routes', []).config(inducoRoutes);
})();