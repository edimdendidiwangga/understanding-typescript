"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Max');
user1.greet('Hi there');
console.log(user1);
//# sourceMappingURL=app.js.map