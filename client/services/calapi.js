'use_strict'

app.factory("calapi", ['$http', '$q',
    function ($http, $q) {

        var url = "/api/db/getView";
        var getView = function (name) {
            return $http({
                url: url,
                method: "GET",
                params: {name: name}
            });
        }
        return {
            getView: getView
        };
    }
]);
