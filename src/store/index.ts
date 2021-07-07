import { BehaviorSubject } from "rxjs";

export default class Store<T extends Object> extends BehaviorSubject<T> {
  update(value: Partial<T>) {
    this.next({ ...this.value, ...value });
  }
}
