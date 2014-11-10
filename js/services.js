(function () {

    var inducoApi = function ($http) {
        return {
            saveUser: function (user) {
                alert(user.email);

                var d = {method: 'POST', data: user, url: 'http://localhost:4567/saveUser'};
                alert(d.url);
                return $http(d);
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
