app.directive('buttonDirective', function ($http, $filter, $window) {
    return {
        restrict:'AE',
        transclude:true,
        template: '<button class="btn btn-primary" type="button"> << <data-ng-transclude></data-ng-transclude> </button>',
        scope: {},
        link: function (scope, element, attr) {





        }
    };
});

