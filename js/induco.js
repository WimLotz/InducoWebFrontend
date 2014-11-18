(function () {
    var induco = angular.module('induco', ['ngRoute', 'mm.foundation', "ui.grid", 'controllers', 'directives', 'routes', 'services']);

    induco.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
}());
