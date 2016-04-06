app.directive('visacalEdit', function ($http, $filter, $window) {
    return {
        restrict:'AE',
        templateUrl: '/client/templates/visacalEdit.html',
        scope: {},
        link: function (scope, element, attr) {

            var myStr = attr.schema;
            var customer = eval("new " + attr.schema + "()");

            var schema = customer.getView();
            console.log(schema);
            scope.headerSchema = schema;

            
        }
    };
});


