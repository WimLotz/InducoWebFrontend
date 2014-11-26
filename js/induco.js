(function() {
    var induco = angular.module("induco", ["ngRoute", "mm.foundation", "controllers", "directives", "routes", "services", "filters"]);

    induco.config(["$httpProvider",
        function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
        }
    ]);
}());
