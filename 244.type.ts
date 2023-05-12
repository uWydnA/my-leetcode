interface B {
  name: string;
  b: boolean;
}

interface C {
  name: string;
  c: number;
}
type A = B | C;

const isCheckB = (obj: A): obj is B => {
  return Boolean((obj as B).b);
};

const main = (obj: A) => {
  obj.name;
  if (isCheckB(obj)) {
    obj.b;
  } else {
    obj.c;
  }
};
