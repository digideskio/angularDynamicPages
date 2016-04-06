'use strict';

app.controller('HeaderController', ['$scope', '$state',
    function ($scope, $state, authToken) {

        $scope.isAuthenticated = false;

    }
]);
