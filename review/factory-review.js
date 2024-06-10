/**
 * 팩토리 패턴은 상대적으로 복잡한 객체 혹은 환경이나 설정에 따라 키와 값을 다양하게 설정해야 하는 객체를 만들어야 할 때 유용하게 사용할 수 있다.
 * 팩토리 패턴을 사용해 특정한 키나 값을 가진 객체를 쉽게 만들 수 있다.
 */

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "DongYeop",
  lastName: "Lee",
  email: "dy7791@naver.com",
});

const user2 = createUser({
  firstName: "Smith",
  lastName: "Sam",
  email: "SamSmith@aaa.com",
});

console.log(user1, user2);

/**
 * 대부분 상황에서 클래스를 이용하는 것이 메모리 절약에 더 유리하다.
 */

class Snack {
  constructor(name, price, kcal) {
    this.name = name;
    this.price = price;
    this.kcal = kcal;
  }

  fullInfo() {
    return `${this.name} ${this.price} ${this.kcal}`;
  }
}

const snack1 = new Snack({
  name: "chocochip",
  price: 1000,
  kcal: 250,
});

const snack2 = new Snack({
  name: "binch",
  price: 2500,
  kcal: 400,
});
