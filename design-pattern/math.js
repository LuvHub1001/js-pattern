export const add = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};

// export default로 선언하면 구조분해할당 없이 바로 import 해도 된다.
export default diff;
