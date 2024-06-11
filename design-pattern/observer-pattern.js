/**
 * Observer 패턴에서는 특정 객체를 구독할 수 있다.
 * 구독하는 주체 : Observer
 * 구독 가능한 객체 : Observable
 * >> 이벤트가 발생할 때 마다 Observable(구독 가능한 객체)는 모든 Observer(구독하는 주체)에게 이벤트를 전파한다.
 *
 * Observable 객체 특징
 * 1. observers : 이벤트가 발생할 때마다 전파할 Observer들의 배열
 * 2. subscribe() : Observer를 Observer 배열에 추가한다.
 * 3. unsubscribe() : Observer 배열에서 Observer를 제거한다.
 * 4. notify() : 등록된 모든 Observer들에게 이벤트를 전파한다.
 */

class Observable {
  constructor() {
    this.observers = []; // Observer들의 배열
  }

  subscribe(func) {
    this.observers.push(func); // 배열에 추가
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func); // 배열에 제거
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data)); // 이벤트 전파
  }
}
