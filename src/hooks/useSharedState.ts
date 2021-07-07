import { useCallback, useEffect, useState } from "react";
import { skip } from "rxjs/operators";
import Store from "../store";
import createSharedStore from "./createSharedStore";

const globalStore = createSharedStore<any>({});

type SetPartialSharedStateAction<S> = (state: S) => S;
type SetSharedStateAction<S> = (
  state: S | SetPartialSharedStateAction<S>
) => void;

const useSharedState = function <T>(
  store: Store<T> = globalStore
): [T, SetSharedStateAction<T>] {
  const [state, setState] = useState(store.value);

  useEffect(() => {
    const subscription = store
      .pipe(skip(1))
      .subscribe((data) => setState(data));
    return () => subscription.unsubscribe();
  });

  const setStateProxy = useCallback(
    (state: T | SetPartialSharedStateAction<T>) => {
      if (typeof state === "function") {
        const getState: any = state;
        store.next(getState(store.value));
      } else {
        store.next(state);
      }
    },
    [store]
  );

  return [state, setStateProxy];
};

export default useSharedState;
