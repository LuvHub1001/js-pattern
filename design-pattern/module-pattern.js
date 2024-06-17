import diff, {
  add as addValues, // export된 변수의 이름이 모듈 내 로컬 변수와 이름이 겹칠 때 as 사용함.
  multiply as multiplyValues,
  divide,
} from "./math.js";

console.log(addValues(2, 3));
console.log(diff(5, 3));
console.log(multiplyValues(2, 3));
console.log(divide(2, 4));

const add = (...args) => {
  return args.reduce((acc, cur) => acc + cur);
};

const multiply = (...args) => {
  return args.reduce((acc, cur) => acc * cur);
};

console.log(add(2, 3));
console.log(diff(5, 3));
console.log(multiply(2, 3));
console.log(divide(2, 4));
