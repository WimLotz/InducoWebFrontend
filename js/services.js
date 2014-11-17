(function () {

    var inducoApi = function ($http) {
        return {
		signOut:function(){
			return $http({method: "POST", url: "http://localhost:4567/logout", withCredentials: true});
		},
            saveUser: function (user) {
                return $http({method: 'POST', data: user, url: 'http://localhost:4567/saveUser'});
            },
            login: function (user) {
                return $http({method: 'POST', data: user, url: 'http://localhost:4567/login', withCredentials: true});
            },
            saveProfile: function (profile) {
                return $http({method: 'POST', data: profile, url: 'http://localhost:4567/saveProfile'});
            },
            fetchUserProfiles: function () {
                return $http({method: 'GET', url: 'http://localhost:4567/fetchUserProfiles', withCredentials: true});
            }
        };
    };

    inducoApi.$inject = ['$http'];

    angular.module("services", [])
        .factory('inducoApi', inducoApi);
})();
