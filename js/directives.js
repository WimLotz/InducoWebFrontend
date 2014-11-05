(function() {

    var navigationBar = function() {
        return {
            restrict: 'E',
            templateUrl: "views/templates/navigation.html",
            scope: {
                activeNavElement: '=?'
            },
            controller: 'NavigationBarController'
        };
    };

    var tags = function() {
        return {
            restrict: 'E',
            scope: {
                tagCollectionName: '=?',
                tagCollection: "="
            },
            templateUrl: "views/templates/tags.html",
            controller: "TagsController"
        };
    };

    angular.module("directives", [])
        .directive('navigationBar', navigationBar)
        .directive('tags', tags);
})();