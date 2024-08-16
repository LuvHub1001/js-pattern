const person = {
  name: "LDY",
  age: 29,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    return console.log(`A ${prop} value is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    return console.log(
      `A ${prop} value is changed from ${obj[prop]} to ${value}`
    );
  },
});

personProxy.name;
personProxy.age = 50;

const temp = {
  hobby: "football",
  position: "MF",
};

const tempProxy = new Proxy(temp, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      return console.log(`A ${prop} does not exist at object`);
    } else console.log(`A ${prop} value is ${obj[prop]}`);
  },

  set: (obj, prop, value) => {
    if (prop === "hobby" && typeof value !== "string") {
      return console.log(`hobby must be string!!`);
    } else if (prop === "position" && typeof value !== "string") {
      return console.log(`position must be string!!`);
    } else {
      console.log(`A ${prop} is changed from ${obj[prop]} to ${value}`);
    }
  },
});

tempProxy.hobby;
tempProxy.test;
tempProxy.hobby = 123;
tempProxy.position = 15;
tempProxy.hobby = "123";
tempProxy.position = "15";
