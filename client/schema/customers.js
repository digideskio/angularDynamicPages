

var Customers = function() {
    UIEngine.apply(this, arguments);
};
Customers.prototype = Object.create(UIEngine.prototype);
Customers.prototype.constructor = Customers;

Customers.prototype.getView = function() {

    this.tableSchema = {
        "firstName": {"title": "First Name", "type": "String", "filter": true, "class": 'uiinput' },
        "lastName": {"title": "Last Name", "type": "String"},
        "userid": {"title": "Author", "type": "String", "readonly":true},
        "city": {"title": "City", "type": "String"},
        "street": {"title": "Street", "type": "String"},
        "number": {"title": "number", "type": "String"},
        "rank": {"title": "Rank", "type": "Image" , "thumbnale": "Star"}
    };

    return this.tableSchema;

}

