app.directive('visacalqueryViewer', function ($http, $filter, $window, calapi) {
    return {
        restrict:'AE',
        templateUrl: '/client/templates/visacalQueryViewers.html',
        scope: {},
        link: function (scope, element, attr) {

            scope.queryId = undefined;
            scope.searchValue = undefined;

            scope.paramNames = [];

            var page = 15;
            if (attr.page != undefined)
            {
                page = attr.page;
            }

            var myStr = attr.schema;
            var o = eval("new " + attr.schema + "()");
            var view = o.getView();
            scope.querySchema = view.schema;
            scope.queryName = view.queryName;
            scope.queryId = view.queryId;
            // The idea of the querySchema is that the designer will build a dynamic UI using JSON

            scope.Search = function()
            {

                // Create the parameters for the query dynamicly from the input schema
                var i = 0;
                var queryObj = {};
                for (var key in scope.querySchema) {
                    var k = key;
                    queryObj[k] = scope.paramNames[i];
                }

                calapi.executeQuery(page, scope.queryId , queryObj ).then(function(result){
                    console.log(result.data);
                    scope.headerSchema = result.data.headerSchema;
                    console.log(scope.headerSchema);
                    scope.dataView = result.data.content;
                    console.log(scope.dataView);
                }).catch(function(result){
                    console.log('error');
                })
            }
        }
    };
});


