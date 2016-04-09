
var QueryEmployee = function() {
    QueryEngine.apply(this, arguments);
};

QueryEmployee.prototype = Object.create(QueryEngine.prototype);
QueryEmployee.prototype.constructor = QueryEmployee;

QueryEmployee.prototype.getView = function() {

    this.queryId = 1;
    this.queryName = 'get all people with the same first name and the same street number';
    this.tableSchema = {
        //"firstName": {"title": "First Name", "type": "String"}
        "userid": {"title": "User id", "type": "String"}
        //"number": {"title": "Street number", "type": "Number" }
    };
    return {
        schema: this.tableSchema,
        queryName:this.queryName,
        queryId:this.queryId
    };
}
