app.directive('visacalViewers', function ($http, $filter, $window, calapi) {
    return {
        restrict:'AE',
        templateUrl: '/client/templates/visacalViewers.html',
        scope: {},
        link: function (scope, element, attr) {

            var myStr = attr.schema;
            var customer = eval("new " + attr.schema + "()");

            var schema = customer.getView();
            scope.headerSchema = schema;

            calapi.getView(attr.schema).then(function(result){
               scope.dataView = result.data;
            }).catch(function(result){
                console.log('error');
            })
        }
    };
});


