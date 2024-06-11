const handler = {
  get: (obj, prop) => {
    return prop === "name" ? `${obj.a} ${obj.b} ${obj.c}` : obj[prop];
  },
};

const proxy = new Proxy(
  { a: "my name", b: "your name", c: "our name", test: "test입니다" },
  handler
);
console.log(proxy.name);
/**
 * 복기
 * 1. proxy에 name이라는 속성이 없어도 handler를 통해 출력된다
 */

const foodHandler = {
  get: (obj, prop) => {
    return prop === "snack" ? `${obj.a} ${obj.b} ${obj.c}` : obj[prop];
  },
};

const foodProxy = new Proxy(
  { a: "포카칩", b: "스윙칩", c: "포테토칩" },
  foodHandler
);
console.log(foodProxy.snack);

const hobby = {
  a: "soccer",
  b: "basketball",
  c: "baseball",
};

const hobbyProxy = new Proxy(hobby, {
  get: (obj, prop) => {
    return prop === "b"
      ? console.log(`The value of ${prop} is ${obj[prop]}`)
      : console.log(`The value of ${prop} is not have value`);
  },
});

hobbyProxy.a;
hobbyProxy.b;
hobbyProxy.c;

const temp = {
  age: 29,
  name: "DY",
};

const tempHandler = {
  get: (obj, prop, receive) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },

  set: (obj, prop, value, receive) => {
    console.log(`${prop} is changed from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
};

const tempProxy = new Proxy(temp, tempHandler);

tempProxy.age;
tempProxy.age = 30;
tempProxy.name;
tempProxy.name = "Hello";

const test = {
  subject: "programming",
  score: 20,
  grade: "D",
};

const testProxy = new Proxy(test, {
  get: (obj, prop) => {
    !obj[prop]
      ? console.log(`A property ${prop} is not exist at obj`)
      : console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    if (prop === "subject" && typeof value !== "string") {
      console.log("subject name must be string!");
    } else if (prop === "score" && typeof value !== "number") {
      console.log("score must be number!");
    } else if (prop === "grade" && value.length > 2) {
      console.log("grade length is too long!");
    } else {
      console.log(`${prop} is Changed from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
  },
});

testProxy.age;
testProxy.subject = 300;
testProxy.score = "100";
testProxy.grade = "A++";
testProxy.grade = "A+";
testProxy.score = 100;
testProxy.subject = "Math";
