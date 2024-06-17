const person = {
  name: "LDY",
  age: 29,
  hobby: "football",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  set: (obj, prop, val) => {
    console.log(`A ${prop} is changed from ${obj[prop]} to ${val}`);
    obj[prop] = val;
  },
});

personProxy.name;
personProxy.hobby = "tennis";

const temp = {
  grade: "A",
  score: 100,
};

const tempProxy = new Proxy(temp, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`A ${prop} does not exist at Object`);
    } else {
      console.log(`The Value of ${prop} is ${obj[prop]}`);
    }
  },

  set: (obj, prop, val) => {
    if (prop === "grade" && typeof val !== "string") {
      console.log(`${prop} must be string!!`);
    } else if (prop === "score" && typeof val !== "number") {
      console.log(`${prop} must be number!!`);
    } else {
      console.log(`A ${prop} is Changed from ${obj[prop]} to ${val}`);
      obj[prop] = val;
    }
  },
});

tempProxy.temp;
tempProxy.grade;

tempProxy.grade = 1000;
tempProxy.grade = "B";

tempProxy.score = "A";
tempProxy.score = 80;
