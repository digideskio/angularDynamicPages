

var QueryEngine = function() {
    if (this.constructor === QueryEngine) {
        throw new Error("Can't instantiate abstract class!");
    }
    this.tableSchema = [];
};

QueryEngine.prototype.getView = function() {
    throw new Error("Abstract method!");
}






