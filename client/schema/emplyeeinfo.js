
var EmployeeInfo = function() {
    UIEngine.apply(this, arguments);
};
EmployeeInfo.prototype = Object.create(UIEngine.prototype);
EmployeeInfo.prototype.constructor = EmployeeInfo;

EmployeeInfo.prototype.getView = function() {


    this.tableSchema = {
        "firstName": {"title": "First Name", "type": "String", "filter": true, "class": 'uiinput' },
        "lastName": {"title": "Last Name", "type": "String"},
        "Age": {"title": "Age", "type": "Number"},
        "id": {"title": "Author", "type": "String", "readonly":true},
        "city": {"title": "City", "type": "String"},
        "street": {"title": "Street", "type": "String"},
        "number": {"title": "number", "type": "String"},
        "picture": {"title": "Picture", "type": "Image" , "url": "Star"}
    };

    return this.tableSchema;

}
