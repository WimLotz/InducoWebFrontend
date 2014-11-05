(function () {
    var inducoApi = function ($http) {
        return {
            saveUser: function (user) {
                return $http({method: 'POST', data: user, url: 'http://localhost:4567/saveUser'});
            },
            login: function (user) {
                return $http({method: 'POST', data: user, url: 'http://localhost:4567/login'});
            },
            saveProfile: function (profile) {
                return $http({method: 'POST', data: profile, url: 'http://localhost:4567/saveProfile'});
            },
            fetchUserProfiles: function () {
                return $http({method: 'GET', url: 'http://localhost:4567/fetchUserProfiles'});
            }
        }
    };

    inducoApi.$inject = ['$http'];

    angular.module("services", [])
        .factory('inducoApi', inducoApi);
})();