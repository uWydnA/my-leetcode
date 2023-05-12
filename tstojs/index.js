var TestClass = /** @class */ (function () {
    function TestClass(obj) {
        this.name = "andy";
        this.obj = obj;
    }
    TestClass.prototype.init = function () {
        this.name = "1";
        this.age = 2;
    };
    return TestClass;
}());
var test = new TestClass({ name: "2" });
console.log(test.name, "before");
test.name = "andy after";
console.log(test.name, "after");
