interface TestT {
  name: string;
}

class TestClass {
  name: string;
  age: number;
  constructor(obj: TestT) {
    this.name = "andy";
    this.obj = obj;
  }
  init() {
    this.name = "1";
    this.age = 2;
  }
}

const test = new TestClass({ name: "2" });
console.log(test.name, "before");

test.name = "andy after";
console.log(test.name, "after");
