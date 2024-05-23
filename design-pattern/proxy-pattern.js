/**
 * Proxy 패턴
 * Proxy : 대상의 동작 (속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 가로챌 수 있음. >> 어떤 것을 대체(대리)한다고 생각하자
 * js에서의 Proxy 객체는 두 개의 매개변수를 가짐
 *
 * ex) const proxy = new Proxy(target,handler)
 * 여기서 handler는 프록시 객체의 target 동작을 가로채서 정의할 동작들이 정해져 있는 함수.
 *
 * 객체의 동작을 커스터마이징할 수 있는 유용한 기능
 * 사용예제) 유효성 검사, 포메팅, 알림, 디버깅
 * cf) 너무 무겁게 사용하면 성능에 부정적 영향 줄 수 있으므로 유의
 */

// 예제
const handler = {
  get: (target, name) => {
    return name === "name"
      ? `${target.a} ${target.b} ${target.c}`
      : target[name];
  },
};

const proxy = new Proxy(
  { a: "North London", b: "4Ever", c: "Arsenal FC" },
  handler
);

console.log(proxy.name);

// 예제2
const person = {
  name: "DY",
  age: 29,
  nationality: "Republic Of Korea",
};

// person 객채와 상호작용(interaction)하지 않고 personProxy 객체와 상호작용(interaction)
const personProxy = new Proxy(person, {
  // 조회
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },

  // 변경
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});

personProxy.name;
personProxy.age = 25;

// 예제3

const example = {
  message1: "hello",
  message2: "world",
};

const handler1 = {};
const exampleProxy = new Proxy(example, handler1);
console.log(exampleProxy.message1, exampleProxy.message2);

const handler2 = {
  get: (obj, prop, receiver) => {
    return "world";
  },
};

const exampleProxy2 = new Proxy(example, handler2);
console.log(exampleProxy2.message1, exampleProxy2.message2); // world world가 출력됨 > example 객체에 있는 모든 속성 접근자를 재정의하기 때문

const handler3 = {
  get: (obj, prop, receiver) => {
    if (prop === "message2") {
      return "world";
    }
    return obj[prop];
  },
};

const exampleProxy3 = new Proxy(example, handler3);
console.log(exampleProxy3.message1, exampleProxy3.message2);

/**
 * Reflect 활용
 * */

const temp = {
  nickname: "Temp",
  position: "Foward",
};

const tempHandler = {
  get: (obj, prop, receive) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value, receive) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  },
};

const tempProxy = new Proxy(temp, tempHandler);
tempProxy.nickname;
tempProxy.position;
tempProxy.nickname = "Player";
tempProxy.position = "MidFielder";
