interface interfaceA {
  name: string;
  age: number;
}
interface interfaceB {
  name: string;
  phone: number;
}

type interfaceAB = interfaceA | interfaceB;

const isInterfaceA = (item: interfaceAB): item is interfaceA => {
  return (item as interfaceA).age !== undefined;
};

function isOfType<T>(
  varToBeChecked: unknown,
  propertyToCheckFor: keyof T
): varToBeChecked is T {
  return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
}

const obj1 = { name: "andy", age: 2 };
const obj2 = { name: "andy", phone: 2 };
const arr1 = new Array<interfaceA>(50).fill(obj1);
const arr2 = new Array<interfaceB>(50).fill(obj2);
const arr3 = [...arr1, ...arr2];
const target = arr3[0];

console.log(target.name);
if (isOfType<interfaceA>(target, "age")) {
  console.log(target.age);
} else {
  console.log(target.phone);
}
