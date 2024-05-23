/**
 * Factory 패턴
 * 비슷한 객체를 공장에서 찍어내듯이 반복적으로 생성하는 패턴
 * 사용예제) 컴파일 단계에서 생성, 런타임 환경에서 동적으로 객체 생성
 */

// 객체 예시
/**
 * 예시의 문제점
 * 1. 반복되는 코드
 * 2. 객체에 수정사항이 생기면 모든 snack 객체를 찾아 수정해야함.
 */
const snack1 = {
  name: "포카칩",
  price: "2,500 ~ 3,000원",
  getInfo: () => {
    return console.log(`${this.name}의 가격은 ${this.price}입니다.`);
  },
};

const snack2 = {
  name: "치토스",
  price: "1,500 ~ 2,000원",
  getInfo: () => {
    return console.log(`${this.name}의 가격은 ${this.price}입니다.`);
  },
};
console.log(snack1, snack2);

// 팩토리 객체 예시
/**
 * 예시의 문제점
 * 1. 같은 기능을 하는 함수가 객체 생성할 때 마다 추가됨.
 */
const factory = (param) => {
  return {
    name: param.name,
    price: param.price,
    getInfo: () => {
      return console.log(`${param.name}의 가격은 ${param.price}입니다.`);
    },
  };
};

const temp1 = factory({ name: "짜장면", price: "6,000원" });
const temp2 = factory({ name: "짬뽕", price: "7,000원" });
console.log(temp1, temp2);

// 최종 예시
// 팩토리 객체 예시에서의 문제점은 prototype을 활용해서 보완함.

class Food {
  constructor(info) {
    this.name = info.name;
    this.price = info.price;
  }
  getInfo() {
    return `${this.name}의 가격은 ${this.price}입니다.`;
  }
}
