(function() {
    var displayArray = function() {
        return function(input) {
            var displayText = "";
            for (var i = 0; i < input.length; i++) {
                displayText = displayText + input[i] + " ";
            }

            return displayText;
        };
    };

    angular.module("filters", []).filter("displayArray", displayArray);
})();
