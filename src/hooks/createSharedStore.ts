import Store from "../store";

const createSharedStore = function <T>(initialValue: T) {
  return new Store<T>(initialValue);
};

export default createSharedStore;
