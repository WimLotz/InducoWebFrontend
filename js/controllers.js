(function() {

    var DashboardController = function($scope) {
        $scope.message = "dashboard page";
    };

    var HomeController = function($scope, $modal, inducoApi, $location) {
        $scope.user = {};

        $scope.login = function() {
            inducoApi.login($scope.user).success(function() {
                $location.path('profile');
            }).error(function(error) {
                console.log("Login error:" + error);
            });
        };

        $scope.open = function() {
            $modal.open({
                templateUrl: 'views/modals/create_user.html',
                controller: CreateUserController
            });
        };
    };

    var CreateUserController = function($scope, $modalInstance, inducoApi) {
        $scope.user = {};

        $scope.ok = function() {
            inducoApi.saveUser($scope.user);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    };

    var IndexController = function($scope, $location) {
        $scope.isHomePage = function() {
            return $location.path() === '/';
        };
    };

    var NavigationBarController = function($scope, inducoApi) {
        $scope.signOut = function() {
            inducoApi.signOut();
        };
    };

    var SearchController = function($scope) {
        $scope.message = 'search page';
    };

    var ProfileController = function($scope, inducoApi, $location) {
        $scope.profiles = [];
        $scope.gridOptions = {
            columnDefs: [{
                name: "name",
                width: 200
            }, {
                name: "emailAddress",
                width: 300
            }, {
                name: "isCompany",
                visible: false
            }]
        };
        inducoApi.fetchUserProfiles().success(function(data) {
            $scope.gridOptions.data = data;
        }).error(function() {
            $location.path("/");
        });

        $scope.createPersonProfile = function() {
            $location.path("createPersonalProfile");
        };

        $scope.createCompanyProfile = function() {
            $location.path("createCompanyProfile");
        };
    };

    var TagsController = function($scope) {

        $scope.addTag = function(tagName) {
            $scope.tagCollection.push(tagName);
            $scope.tagName = "";
        };

        $scope.removeTag = function(tagName) {
            for (var i = 0; i < $scope.tagCollection.length + 1; i++) {
                if ($scope.tagCollection[i] === tagName) {
                    $scope.tagCollection.splice(i, 1);
                    return;
                }
            }
        };
    };

    var CreatePersonProfileController = function($scope, inducoApi) {
        $scope.personProfile = {
            workExpTags: [],
            neededExpTags: [],
            hiring: false,
            lookingForWork: false
        };
        $scope.hiringHeading = "Hiring";
        $scope.lookinHeading = "Looking For Work";
        $scope.showRequiredFields = false;

        $scope.$watch("personProfile.hiring", function(newValue, oldValue) {
            if ($scope.personProfile.hiring) {
                $scope.hiringHeading = "Hiring";
            } else {
                $scope.hiringHeading = "Not Hiring";
            }
        });

        $scope.$watch('personProfile.lookingForWork', function(newValue, oldValue) {
            if ($scope.personProfile.lookingForWork) {
                $scope.lookinHeading = "Looking For Work";
            } else {
                $scope.lookinHeading = "Not Looking For Work";
            }
        });

        $scope.savePersonProfile = function(personProfileForm) {
            if (personProfileForm.$valid) {
                $scope.personProfile.IsCompany = false;
                inducoApi.saveProfile($scope.personProfile);
                $scope.showRequiredFields = false;
            } else {
                $scope.showRequiredFields = true;
            }
        };
    };

    var CreateCompanyProfileController = function($scope, inducoApi) {
        $scope.companyProfile = {};

        $scope.submitCompanyProfileForm = function() {
            $scope.companyProfile.IsCompany = true;
            inducoApi.saveProfile($scope.companyProfile);
        };
    };

    ProfileController.$inject = ['$scope', 'inducoApi', '$location'];
    DashboardController.$inject = ['$scope'];
    HomeController.$inject = ['$scope', '$modal', 'inducoApi', '$location'];
    NavigationBarController.$inject = ['$scope', 'inducoApi'];
    SearchController.$inject = ['$scope'];
    CreateUserController.$inject = ['$scope', '$modalInstance', 'inducoApi'];
    CreatePersonProfileController.$inject = ['$scope', 'inducoApi'];
    CreateCompanyProfileController.$inject = ['$scope', 'inducoApi'];
    IndexController.$inject = ['$scope', '$location'];
    TagsController.$inject = ['$scope'];

    angular.module("controllers", [])
        .controller("DashboardController", DashboardController)
        .controller("HomeController", HomeController)
        .controller("NavigationBarController", NavigationBarController)
        .controller("SearchController", SearchController)
        .controller("CreateUserController", CreateUserController)
        .controller("CreatePersonProfileController", CreatePersonProfileController)
        .controller("CreateCompanyProfileController", CreateCompanyProfileController)
        .controller("IndexController", IndexController)
        .controller("TagsController", TagsController)
        .controller("ProfileController", ProfileController);
})();
