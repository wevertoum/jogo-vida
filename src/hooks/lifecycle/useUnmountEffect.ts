import { useEffect, useCallback } from "react";

const useUnmountEffect = function (effect: () => void) {
  const unmountEffect = useCallback(() => effect, [effect]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(unmountEffect, []);
};

export default useUnmountEffect;
